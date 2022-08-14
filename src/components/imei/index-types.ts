import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type ImeiAlias = string;
export interface ImeiOpt extends StringOpt {
    allowHyphens?: boolean; // allow_hyphens
}
export type ImeiCast = ScalarItemCast<ImeiAlias, ImeiOpt>;
