import {TypeOpt} from "@leyyo/core";
import V from "validator";
import {ScalarItemCast} from "@leyyo/scalar";

export type AlphaAlias = string;
export interface AlphaOpt extends TypeOpt {
    locale?: V.AlphaLocale;
    ignore?: string | RegExp;
}
export type AlphaCast = ScalarItemCast<AlphaAlias, AlphaOpt>;
