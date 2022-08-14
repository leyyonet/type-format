import {TypeOpt} from "@leyyo/core";
import V from "validator";
import {ScalarItemCast} from "@leyyo/scalar";

export type AlphanumericAlias = string;
export interface AlphanumericOpt extends TypeOpt {
    locale?: V.AlphanumericLocale;
    ignore?: string | RegExp;
}
export type AlphanumericCast = ScalarItemCast<AlphanumericAlias, AlphanumericOpt>;
