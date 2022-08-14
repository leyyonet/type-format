import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type HexadecimalAlias = string;
export type HexadecimalOpt = TypeOpt;
export type HexadecimalCast = ScalarItemCast<HexadecimalAlias, HexadecimalOpt>;
