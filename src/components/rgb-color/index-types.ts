import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type RgbColorAlias = string;
export interface RgbColorOpt extends TypeOpt {
    includePercentValues?: boolean;
}
export type RgbColorCast = ScalarItemCast<RgbColorAlias, RgbColorOpt>;
