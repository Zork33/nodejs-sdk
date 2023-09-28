import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export interface Version {
    $type: "yandex.cloud.mdb.clickhouse.v1.Version";
    /** ID of the version. */
    id: string;
    /** Name of the version. */
    name: string;
    /** Whether version is deprecated. */
    deprecated: boolean;
    /** List of versions that can be updated from current. */
    updatableTo: string[];
}
export declare const Version: {
    $type: "yandex.cloud.mdb.clickhouse.v1.Version";
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        deprecated?: boolean | undefined;
        updatableTo?: string[] | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        deprecated?: boolean | undefined;
        updatableTo?: (string[] & string[] & Record<Exclude<keyof I["updatableTo"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "deprecated" | "updatableTo">, never>>(object: I): Version;
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
