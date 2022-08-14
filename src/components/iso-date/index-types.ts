// yyyy-mmm-dd
import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type IsoDateAlias = string;
export type IsoDateOpt = StringOpt;
export type IsoDateCast = ScalarItemCast<IsoDateAlias, IsoDateOpt>;
