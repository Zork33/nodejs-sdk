import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/** A health check payload resource. */
export interface Payload {
    $type: "yandex.cloud.apploadbalancer.v1.Payload";
    /** Payload text. */
    text: string | undefined;
}
export declare const Payload: {
    $type: "yandex.cloud.apploadbalancer.v1.Payload";
    encode(message: Payload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Payload;
    fromJSON(object: any): Payload;
    toJSON(message: Payload): unknown;
    fromPartial<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "text">, never>>(object: I): Payload;
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
