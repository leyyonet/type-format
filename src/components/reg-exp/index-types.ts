import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type RegExpAlias = RegExp;
export interface RegExpOpt extends TypeOpt {
    flags?: string;
}
export type RegExpCast = ScalarItemCast<RegExpAlias, RegExpOpt>;
