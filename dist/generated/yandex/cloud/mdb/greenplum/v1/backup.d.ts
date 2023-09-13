import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export interface Backup {
    $type: "yandex.cloud.mdb.greenplum.v1.Backup";
    /** Required. ID of the backup. */
    id: string;
    /** ID of the folder that the backup belongs to. */
    folderId: string;
    /** Time when the backup operation was completed. */
    createdAt?: Date;
    /** ID of the Greenplum® cluster that the backup was created for. */
    sourceClusterId: string;
    /** Time when the backup operation was started. */
    startedAt?: Date;
    /** Size of the backup in bytes. */
    size: number;
}
export declare const Backup: {
    $type: "yandex.cloud.mdb.greenplum.v1.Backup";
    encode(message: Backup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Backup;
    fromJSON(object: any): Backup;
    toJSON(message: Backup): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        size?: number | undefined;
        startedAt?: Date | undefined;
        sourceClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId">, never>>(object: I): Backup;
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
