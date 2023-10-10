import { ServiceDefinition } from '@grpc/grpc-js';
import { GeneratedServiceClientCtor, WrappedServiceClientType, SessionConfig } from './types';
export declare class Session {
    private readonly config;
    private readonly channelCredentials;
    private readonly tokenCreator;
    private static readonly DEFAULT_CONFIG;
    constructor(config?: SessionConfig);
    get pollInterval(): number;
    client<S extends ServiceDefinition>(clientClass: GeneratedServiceClientCtor<S>, customEndpoint?: string): WrappedServiceClientType<S>;
}
