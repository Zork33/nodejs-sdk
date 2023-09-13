import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.serverless.apigateway.v1";
export interface ApiGateway {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway";
    /** ID of the API gateway. Generated at creation time. */
    id: string;
    /** ID of the folder that the API gateway belongs to. */
    folderId: string;
    /** Creation timestamp for the API-gateway. */
    createdAt?: Date;
    /** Name of the API gateway. The name is unique within the folder. */
    name: string;
    /** Description of the API gateway. */
    description: string;
    /** API gateway labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Status of the API gateway. */
    status: ApiGateway_Status;
    /** Default domain for the API gateway. Generated at creation time. */
    domain: string;
    /** ID of the log group for the API gateway. */
    logGroupId: string;
    /** List of domains attached to API gateway. */
    attachedDomains: AttachedDomain[];
    /** Network access. If specified the gateway will be attached to specified network/subnet(s). */
    connectivity?: Connectivity;
}
export declare enum ApiGateway_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - API gateway is being created. */
    CREATING = 1,
    /** ACTIVE - API gateway is ready for use. */
    ACTIVE = 2,
    /** DELETING - API gateway is being deleted. */
    DELETING = 3,
    /** ERROR - API gateway failed. The only allowed action is delete. */
    ERROR = 4,
    /** UPDATING - API gateway is being updated. */
    UPDATING = 5,
    UNRECOGNIZED = -1
}
export declare function apiGateway_StatusFromJSON(object: any): ApiGateway_Status;
export declare function apiGateway_StatusToJSON(object: ApiGateway_Status): string;
export interface ApiGateway_LabelsEntry {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry";
    key: string;
    value: string;
}
export interface AttachedDomain {
    $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain";
    /** ID of the domain. */
    domainId: string;
    /** ID of the domain certificate. */
    certificateId: string;
    /** Enabling flag. */
    enabled: boolean;
    /** Name of the domain. */
    domain: string;
}
/** Gateway connectivity specification. */
export interface Connectivity {
    $type: "yandex.cloud.serverless.apigateway.v1.Connectivity";
    /**
     * Network the gateway will have access to.
     * It's essential to specify network with subnets in all availability zones.
     */
    networkId: string;
    /**
     * Complete list of subnets (from the same network) the gateway can be attached to.
     * It's essential to specify at least one subnet for each availability zones.
     */
    subnetId: string[];
}
export declare const ApiGateway: {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway";
    encode(message: ApiGateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiGateway;
    fromJSON(object: any): ApiGateway;
    toJSON(message: ApiGateway): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: ApiGateway_Status | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        logGroupId?: string | undefined;
        domain?: string | undefined;
        attachedDomains?: {
            enabled?: boolean | undefined;
            domain?: string | undefined;
            certificateId?: string | undefined;
            domainId?: string | undefined;
        }[] | undefined;
        connectivity?: {
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: ApiGateway_Status | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        logGroupId?: string | undefined;
        domain?: string | undefined;
        attachedDomains?: ({
            enabled?: boolean | undefined;
            domain?: string | undefined;
            certificateId?: string | undefined;
            domainId?: string | undefined;
        }[] & ({
            enabled?: boolean | undefined;
            domain?: string | undefined;
            certificateId?: string | undefined;
            domainId?: string | undefined;
        } & {
            enabled?: boolean | undefined;
            domain?: string | undefined;
            certificateId?: string | undefined;
            domainId?: string | undefined;
        } & Record<Exclude<keyof I["attachedDomains"][number], "$type" | "enabled" | "domain" | "certificateId" | "domainId">, never>)[] & Record<Exclude<keyof I["attachedDomains"], "$type" | keyof {
            enabled?: boolean | undefined;
            domain?: string | undefined;
            certificateId?: string | undefined;
            domainId?: string | undefined;
        }[]>, never>) | undefined;
        connectivity?: ({
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } & {
            subnetId?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetId"], "$type" | keyof string[]>, never>) | undefined;
            networkId?: string | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "subnetId" | "networkId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "status" | "name" | "labels" | "logGroupId" | "domain" | "attachedDomains" | "connectivity">, never>>(object: I): ApiGateway;
};
export declare const ApiGateway_LabelsEntry: {
    $type: "yandex.cloud.serverless.apigateway.v1.ApiGateway.LabelsEntry";
    encode(message: ApiGateway_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApiGateway_LabelsEntry;
    fromJSON(object: any): ApiGateway_LabelsEntry;
    toJSON(message: ApiGateway_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ApiGateway_LabelsEntry;
};
export declare const AttachedDomain: {
    $type: "yandex.cloud.serverless.apigateway.v1.AttachedDomain";
    encode(message: AttachedDomain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDomain;
    fromJSON(object: any): AttachedDomain;
    toJSON(message: AttachedDomain): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        domain?: string | undefined;
        certificateId?: string | undefined;
        domainId?: string | undefined;
    } & {
        enabled?: boolean | undefined;
        domain?: string | undefined;
        certificateId?: string | undefined;
        domainId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "domain" | "certificateId" | "domainId">, never>>(object: I): AttachedDomain;
};
export declare const Connectivity: {
    $type: "yandex.cloud.serverless.apigateway.v1.Connectivity";
    encode(message: Connectivity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connectivity;
    fromJSON(object: any): Connectivity;
    toJSON(message: Connectivity): unknown;
    fromPartial<I extends {
        subnetId?: string[] | undefined;
        networkId?: string | undefined;
    } & {
        subnetId?: (string[] & string[] & Record<Exclude<keyof I["subnetId"], "$type" | keyof string[]>, never>) | undefined;
        networkId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "networkId">, never>>(object: I): Connectivity;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
