import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.lockbox.v1";
/** A secret that may contain several versions of the payload. */
export interface Secret {
    $type: "yandex.cloud.lockbox.v1.Secret";
    /** ID of the secret. */
    id: string;
    /** ID of the folder that the secret belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the secret. */
    name: string;
    /** Description of the secret. */
    description: string;
    /** Custom labels for the secret as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Optional ID of the KMS key will be used to encrypt and decrypt the secret. */
    kmsKeyId: string;
    /** Status of the secret. */
    status: Secret_Status;
    /** Current (i.e. the `latest`) version of the secret. */
    currentVersion?: Version;
    /** Flag that inhibits deletion of the secret. */
    deletionProtection: boolean;
}
export declare enum Secret_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The secret is being created. */
    CREATING = 1,
    /**
     * ACTIVE - The secret is active and the secret payload can be accessed.
     *
     * Can be set to INACTIVE using the [SecretService.Deactivate] method.
     */
    ACTIVE = 2,
    /**
     * INACTIVE - The secret is inactive and unusable.
     *
     * Can be set to ACTIVE using the [SecretService.Deactivate] method.
     */
    INACTIVE = 3,
    UNRECOGNIZED = -1
}
export declare function secret_StatusFromJSON(object: any): Secret_Status;
export declare function secret_StatusToJSON(object: Secret_Status): string;
export interface Secret_LabelsEntry {
    $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry";
    key: string;
    value: string;
}
export interface Version {
    $type: "yandex.cloud.lockbox.v1.Version";
    /** ID of the version. */
    id: string;
    /** ID of the secret that the version belongs to. */
    secretId: string;
    /** Time when the version was created. */
    createdAt?: Date;
    /**
     * Time when the version is going to be destroyed. Empty unless the status
     * is `SCHEDULED_FOR_DESTRUCTION`.
     */
    destroyAt?: Date;
    /** Description of the version. */
    description: string;
    /** Status of the secret. */
    status: Version_Status;
    /** Keys of the entries contained in the version payload. */
    payloadEntryKeys: string[];
}
export declare enum Version_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The version is active and the secret payload can be accessed. */
    ACTIVE = 1,
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [Version.destroy_at] field.
     */
    SCHEDULED_FOR_DESTRUCTION = 2,
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    DESTROYED = 3,
    UNRECOGNIZED = -1
}
export declare function version_StatusFromJSON(object: any): Version_Status;
export declare function version_StatusToJSON(object: Version_Status): string;
export declare const Secret: {
    $type: "yandex.cloud.lockbox.v1.Secret";
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: Secret_Status | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        currentVersion?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: string[] | undefined;
        } | undefined;
        kmsKeyId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: Secret_Status | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        currentVersion?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: string[] | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: Version_Status | undefined;
            destroyAt?: Date | undefined;
            secretId?: string | undefined;
            payloadEntryKeys?: (string[] & string[] & Record<Exclude<keyof I["currentVersion"]["payloadEntryKeys"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["currentVersion"], "$type" | "description" | "id" | "createdAt" | "status" | "destroyAt" | "secretId" | "payloadEntryKeys">, never>) | undefined;
        kmsKeyId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "status" | "name" | "labels" | "deletionProtection" | "currentVersion" | "kmsKeyId">, never>>(object: I): Secret;
};
export declare const Secret_LabelsEntry: {
    $type: "yandex.cloud.lockbox.v1.Secret.LabelsEntry";
    encode(message: Secret_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret_LabelsEntry;
    fromJSON(object: any): Secret_LabelsEntry;
    toJSON(message: Secret_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Secret_LabelsEntry;
};
export declare const Version: {
    $type: "yandex.cloud.lockbox.v1.Version";
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: Version_Status | undefined;
        destroyAt?: Date | undefined;
        secretId?: string | undefined;
        payloadEntryKeys?: string[] | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: Version_Status | undefined;
        destroyAt?: Date | undefined;
        secretId?: string | undefined;
        payloadEntryKeys?: (string[] & string[] & Record<Exclude<keyof I["payloadEntryKeys"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "status" | "destroyAt" | "secretId" | "payloadEntryKeys">, never>>(object: I): Version;
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
