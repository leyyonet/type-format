import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type NanoIdAlias = string;
export interface NanoIdOpt extends TypeOpt {
    length?: number;
    nonSecure?: boolean;
    alphabet?: string;
    defaultSize?: number;
}
export interface NanoIdCast extends ScalarItemCast<NanoIdAlias, NanoIdOpt> {
    generate(opt?: NanoIdOpt): NanoIdAlias;
}
