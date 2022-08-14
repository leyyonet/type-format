import {ScalarItemCast, StringOpt} from "@leyyo/scalar";
import V from "validator";

export type HashAlias = string;
export interface HashOpt extends StringOpt {
    algorithm?: V.HashAlgorithm;
}
export type HashCast = ScalarItemCast<HashAlias, HashOpt>;
