import {NumberOpt, ScalarItemCast, ScalarRangeOpt} from "@leyyo/scalar";

export type DecimalAlias = number;
export interface DecimalOpt extends NumberOpt {
    digits?: ScalarRangeOpt;
}
export type DecimalCast = ScalarItemCast<DecimalAlias, DecimalOpt>;
