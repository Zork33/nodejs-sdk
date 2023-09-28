import { AxiosRequestConfig } from 'axios';
import { TokenService } from '../types';
import { SimpleLogger } from '../utils/simple-logger';
declare type Options = AxiosRequestConfig & {
    /**
     * Any logger that have methods required by SimpleLogger.Logger. Default is new instance of SimpleLogger.
     */
    logger?: SimpleLogger.Logger;
    /**
     * The default is false and the token is always checked that it has not expired each time the getToken()
     * method is called. If the token is out of date, a new token is requested. In this mode, the update logic works well
     * in both standard nodejs and yandex cloud serverless modes.  However, in standard nodejs, you can improve the process
     * of token exposure by enabling timed updates in the background. In serverless mode, timer updates are likely to be problematic,
     * because when the serverless function is not called, the timer events do not work. That's why you should turn it to true
     * only when you are **absolutely sure** that the code will not be used in serverless mode.
     */
    doUpdateTokenInBackground?: boolean;
};
/**
 * **Only for unit tests purposes**.
 */
export declare const setTestInitializeTimerAdvance: (timerAdvance: (duration: number) => void) => void;
export declare const getTestInitPromise: () => Promise<string | void> | undefined;
export declare class MetadataTokenService implements TokenService {
    private readonly url;
    private readonly axiosOptions;
    private readonly doUpdateTokenInBackground;
    private readonly logger;
    private token?;
    /**
     * The time after which the token cannot be used. This is the token expiration time minus the minimum time that
     * must be available (TOKEN_MINIMUM_LIFETIME_MARGIN_MS).
     */
    private tokenExpiresAt;
    /**
     * Time of scheduled token renewal. Counted as a percentage of the initial time for which the token
     * was issued (TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT).
     */
    private tokenRefreshAt;
    /**
     * Time after which to issue warning messages about how much time the available token has left. Counted as
     * a percentage of the time for which the token was issued (TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT).
     */
    private tokenStartReportTTLAt;
    /**
     * Error that is returned when retrying getToken(), if the last fetchToken() returned an error and
     * the time of the retry has not yet arrived.
     */
    private tokenLastError?;
    /**
     * Counter of repeated errors received in fetchToken() to make repeated requests with less frequency.
     */
    private tokenErrorCount;
    private currentGetTokenPromise?;
    private timer?;
    private disposed;
    constructor();
    constructor(options: Options);
    constructor(url: string, options?: Options);
    getToken(): Promise<string>;
    /**
     * It is recommended to call this method at the beginning of serverless function with context.token parameter.
     * This will reduce serverless function runtime avoiding additional request to the Iam service.
     */
    setIamResponse(iamResponse: MetadataTokenService.IamGetTokenResponse): void;
    dispose(): Promise<void>;
    private _getToken;
    private initialize;
    private fetchToken;
    private setTimer;
}
export declare namespace MetadataTokenService {
    enum Messages {
        /**
         * Inlines: new HRInterval().
         */
        warn_emaining_token_TTL = "remaining token's TTL: %s",
        /**
         * Inlines: url, doUpdateTokenInBackground, axiosOptions.
         */
        debug_ctor = "metadata-token.ctor: url: %s, doUpdateTokenInBackground: %s, axiosOptions: %o",
        /**
         * Inlines: new HRInterval(), "(too small TTL)"?.
         */
        debug_new_token_was_received = "new token. TTL: %s%s",
        debug_new_token_was_received_too_small_postfix = " (too small TTL)",
        trace_getToken = "metadata-token.getToken",
        trace_dispose = "metadata-token.dispose",
        trace__getToken = "metadata-token._getToken",
        trace_initialize = "metadata-token.initialize",
        trace_fetchToken = "metadata-token.fetchToken",
        trace_setIamResponse = "metadata-token.setIamResponse",
        trace_setTimer = "metadata-token.setTimer",
        /**
         * Inlines: http-status, error-message.
         */
        err_part_http_error = "%s %s",
        /**
         * Inlines: new HRInerval().
         */
        err_part_insufficient_lifetime = "insufficient lifetime: %s",
        /**
         * Inlines: err_part
         */
        err_failed_fetch = "failed to fetch token: %s",
        err_invalid_iam_token = "invalid iam token: %o",
        err_service_is_disposed = "service is disposed"
    }
    const DEFAULT_URL = "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token";
    const DEFAULT_OPTIONS: Options;
    const DEFAULT_LOGGER_PREFIX = "metadata-auth";
    type IamGetTokenResponse = {
        token_type: 'Bearer';
        access_token: string; /** in seconds! */
        expires_in: number;
    };
}
export {};
