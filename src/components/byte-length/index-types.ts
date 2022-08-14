import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type ByteLengthAlias = string;
export interface ByteLengthOpt extends TypeOpt {
    min?: number;
    max?: number;
}
export type ByteLengthCast = ScalarItemCast<ByteLengthAlias, ByteLengthOpt>;
