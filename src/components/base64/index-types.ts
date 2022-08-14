import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type Base64Alias = string;
export interface Base64Opt extends StringOpt {
    urlSafe?: boolean;
}
export type Base64Cast = ScalarItemCast<Base64Alias, Base64Opt>;
