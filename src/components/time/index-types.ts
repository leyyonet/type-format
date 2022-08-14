import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type TimeAlias = string;
export type TimeOpt = StringOpt;
export type TimeCast = ScalarItemCast<TimeAlias, TimeOpt>;
