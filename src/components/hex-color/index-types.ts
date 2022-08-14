import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type HexColorAlias = string;
export type HexColorOpt = TypeOpt;
export type HexColorCast = ScalarItemCast<HexColorAlias, HexColorOpt>;
