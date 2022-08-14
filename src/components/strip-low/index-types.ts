import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type StripLowAlias = string;
export interface StripLowOpt extends TypeOpt {
    keepNewLines?: boolean;
}
export type StripLowCast = ScalarItemCast<StripLowAlias, StripLowOpt>;
