export declare const INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN = 5;
export declare const INITIALIZE_BACKOFF_SLOT_DURATION = 5;
export declare const INITIALIZE_BACKOFF_CEILING = 3;
export declare const INITIALIZE_BACKOFF_UNCERTAIN_RATIO = 0.5;
export declare const GET_TOKEN_BACKOFF_SLOT_DURATION: number;
export declare const GET_TOKEN_BACKOFF_CEILING = 1;
export declare const GET_TOKEN_BACKOFF_UNCERTAIN_RATIO = 0.3;
export declare const TOKEN_MINIMUM_LIFETIME_MARGIN_MS: number;
export declare const TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT = 90;
export declare const TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT = 80;
export declare const ERROR_REPORT_INTERVAL_MS: number;
export declare const enum Messages {
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
    trace_destroy = "metadata-token.destroy",
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
    err_service_is_destroyed = "service is destroyed"
}
export declare const DEFAULT_URL = "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token";
export declare const DEFAULT_OPTIONS: {
    headers: {
        'Metadata-Flavor': string;
    };
};
export declare const DEFAULT_LOGGER_PREFIX = "metadata-auth";
