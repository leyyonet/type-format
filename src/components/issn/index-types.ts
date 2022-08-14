import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type IssnAlias = string;
export interface IssnOpt extends StringOpt {
    /**
     * If `case_sensitive` is `true`, ISSNs with a lowercase `x` as the check digit are rejected.
     *
     * @default false
     */
    caseSensitive?: boolean; // case_sensitive
    /**
     * @default false
     */
    requireHyphen?: boolean; //require_hyphen
}
export type IssnCast = ScalarItemCast<IssnAlias, IssnOpt>;
