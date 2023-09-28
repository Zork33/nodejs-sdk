import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.kms.v1";
/** Supported symmetric encryption algorithms. */
export declare enum SymmetricAlgorithm {
    SYMMETRIC_ALGORITHM_UNSPECIFIED = 0,
    /** AES_128 - AES algorithm with 128-bit keys. */
    AES_128 = 1,
    /** AES_192 - AES algorithm with 192-bit keys. */
    AES_192 = 2,
    /** AES_256 - AES algorithm with 256-bit keys. */
    AES_256 = 3,
    /** AES_256_HSM - AES algorithm with 256-bit keys hosted by HSM */
    AES_256_HSM = 4,
    UNRECOGNIZED = -1
}
export declare function symmetricAlgorithmFromJSON(object: any): SymmetricAlgorithm;
export declare function symmetricAlgorithmToJSON(object: SymmetricAlgorithm): string;
/** A symmetric KMS key that may contain several versions of the cryptographic material. */
export interface SymmetricKey {
    $type: "yandex.cloud.kms.v1.SymmetricKey";
    /** ID of the key. */
    id: string;
    /** ID of the folder that the key belongs to. */
    folderId: string;
    /** Time when the key was created. */
    createdAt?: Date;
    /** Name of the key. */
    name: string;
    /** Description of the key. */
    description: string;
    /** Custom labels for the key as `key:value` pairs. Maximum 64 per key. */
    labels: {
        [key: string]: string;
    };
    /** Current status of the key. */
    status: SymmetricKey_Status;
    /**
     * Primary version of the key, used as the default for all encrypt/decrypt operations,
     * when no version ID is specified.
     */
    primaryVersion?: SymmetricKeyVersion;
    /** Default encryption algorithm to be used with new versions of the key. */
    defaultAlgorithm: SymmetricAlgorithm;
    /**
     * Time of the last key rotation (time when the last version was created).
     * Empty if the key does not have versions yet.
     */
    rotatedAt?: Date;
    /** Time period between automatic key rotations. */
    rotationPeriod?: Duration;
    /** Flag that inhibits deletion of the key */
    deletionProtection: boolean;
}
export declare enum SymmetricKey_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - The key is being created. */
    CREATING = 1,
    /**
     * ACTIVE - The key is active and can be used for encryption and decryption.
     * Can be set to INACTIVE using the [SymmetricKeyService.Update] method.
     */
    ACTIVE = 2,
    /**
     * INACTIVE - The key is inactive and unusable.
     * Can be set to ACTIVE using the [SymmetricKeyService.Update] method.
     */
    INACTIVE = 3,
    UNRECOGNIZED = -1
}
export declare function symmetricKey_StatusFromJSON(object: any): SymmetricKey_Status;
export declare function symmetricKey_StatusToJSON(object: SymmetricKey_Status): string;
export interface SymmetricKey_LabelsEntry {
    $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry";
    key: string;
    value: string;
}
/** Symmetric KMS key version: metadata about actual cryptographic data. */
export interface SymmetricKeyVersion {
    $type: "yandex.cloud.kms.v1.SymmetricKeyVersion";
    /** ID of the key version. */
    id: string;
    /** ID of the symmetric KMS key that the version belongs to. */
    keyId: string;
    /** Status of the key version. */
    status: SymmetricKeyVersion_Status;
    /** Encryption algorithm that should be used when using the key version to encrypt plaintext. */
    algorithm: SymmetricAlgorithm;
    /** Time when the key version was created. */
    createdAt?: Date;
    /**
     * Indication of a primary version, that is to be used by default for all cryptographic
     * operations that don't have a key version explicitly specified.
     */
    primary: boolean;
    /**
     * Time when the key version is going to be destroyed. Empty unless the status
     * is `SCHEDULED_FOR_DESTRUCTION`.
     */
    destroyAt?: Date;
    /** Indication of the version that is hosted by HSM. */
    hostedByHsm: boolean;
}
/** Possible version status. */
export declare enum SymmetricKeyVersion_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - The version is active and can be used for encryption and decryption. */
    ACTIVE = 1,
    /**
     * SCHEDULED_FOR_DESTRUCTION - The version is scheduled for destruction, the time when it will be destroyed
     * is specified in the [SymmetricKeyVersion.destroy_at] field.
     */
    SCHEDULED_FOR_DESTRUCTION = 2,
    /** DESTROYED - The version is destroyed and cannot be recovered. */
    DESTROYED = 3,
    UNRECOGNIZED = -1
}
export declare function symmetricKeyVersion_StatusFromJSON(object: any): SymmetricKeyVersion_Status;
export declare function symmetricKeyVersion_StatusToJSON(object: SymmetricKeyVersion_Status): string;
export declare const SymmetricKey: {
    $type: "yandex.cloud.kms.v1.SymmetricKey";
    encode(message: SymmetricKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricKey;
    fromJSON(object: any): SymmetricKey;
    toJSON(message: SymmetricKey): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: SymmetricKey_Status | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        defaultAlgorithm?: SymmetricAlgorithm | undefined;
        primaryVersion?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: SymmetricKeyVersion_Status | undefined;
            keyId?: string | undefined;
            algorithm?: SymmetricAlgorithm | undefined;
            primary?: boolean | undefined;
            destroyAt?: Date | undefined;
            hostedByHsm?: boolean | undefined;
        } | undefined;
        rotatedAt?: Date | undefined;
        rotationPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: SymmetricKey_Status | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        defaultAlgorithm?: SymmetricAlgorithm | undefined;
        primaryVersion?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: SymmetricKeyVersion_Status | undefined;
            keyId?: string | undefined;
            algorithm?: SymmetricAlgorithm | undefined;
            primary?: boolean | undefined;
            destroyAt?: Date | undefined;
            hostedByHsm?: boolean | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: SymmetricKeyVersion_Status | undefined;
            keyId?: string | undefined;
            algorithm?: SymmetricAlgorithm | undefined;
            primary?: boolean | undefined;
            destroyAt?: Date | undefined;
            hostedByHsm?: boolean | undefined;
        } & Record<Exclude<keyof I["primaryVersion"], "$type" | "id" | "createdAt" | "status" | "keyId" | "algorithm" | "primary" | "destroyAt" | "hostedByHsm">, never>) | undefined;
        rotatedAt?: Date | undefined;
        rotationPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["rotationPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "status" | "name" | "labels" | "deletionProtection" | "defaultAlgorithm" | "primaryVersion" | "rotatedAt" | "rotationPeriod">, never>>(object: I): SymmetricKey;
};
export declare const SymmetricKey_LabelsEntry: {
    $type: "yandex.cloud.kms.v1.SymmetricKey.LabelsEntry";
    encode(message: SymmetricKey_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricKey_LabelsEntry;
    fromJSON(object: any): SymmetricKey_LabelsEntry;
    toJSON(message: SymmetricKey_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SymmetricKey_LabelsEntry;
};
export declare const SymmetricKeyVersion: {
    $type: "yandex.cloud.kms.v1.SymmetricKeyVersion";
    encode(message: SymmetricKeyVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SymmetricKeyVersion;
    fromJSON(object: any): SymmetricKeyVersion;
    toJSON(message: SymmetricKeyVersion): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: SymmetricKeyVersion_Status | undefined;
        keyId?: string | undefined;
        algorithm?: SymmetricAlgorithm | undefined;
        primary?: boolean | undefined;
        destroyAt?: Date | undefined;
        hostedByHsm?: boolean | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: SymmetricKeyVersion_Status | undefined;
        keyId?: string | undefined;
        algorithm?: SymmetricAlgorithm | undefined;
        primary?: boolean | undefined;
        destroyAt?: Date | undefined;
        hostedByHsm?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "status" | "keyId" | "algorithm" | "primary" | "destroyAt" | "hostedByHsm">, never>>(object: I): SymmetricKeyVersion;
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
