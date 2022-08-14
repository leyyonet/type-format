import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type PassportAlias = string;
export interface PassportOpt extends StringOpt {
    country?: string;
}
export type PassportCast = ScalarItemCast<PassportAlias, PassportOpt>;
