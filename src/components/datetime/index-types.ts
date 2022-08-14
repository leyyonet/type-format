import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type DatetimeAlias = string;
export type DatetimeOpt = StringOpt;
export type DatetimeCast = ScalarItemCast<DatetimeAlias, DatetimeOpt>;
