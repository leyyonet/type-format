import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type FqdnAlias = string;
export interface FqdnOpt extends TypeOpt {
    /**
     * @default true
     */
    requireTld?: boolean; // require_tld
    /**
     * @default false
     */
    allowUnderscores?: boolean; // allow_underscores
    /**
     * @default false
     */
    allowTrailingDot?: boolean; // allow_trailing_dot
    /**
     * @default false
     */
    allowNumericTld?: boolean; // allow_numeric_tld
    /**
     * If `allow_wildcard` is set to true, the validator will allow domain starting with `*.` (e.g. `*.example.com` or `*.shop.example.com`).
     * @default false
     */
    allowWildcard?: boolean; // allow_wildcard
}
export type FqdnCast = ScalarItemCast<FqdnAlias, FqdnOpt>;
