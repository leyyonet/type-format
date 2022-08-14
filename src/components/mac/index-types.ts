import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type MacAlias = string;
export interface MacOpt extends TypeOpt {
    /**
     * If `no_colons` is `true`, the validator will allow MAC addresses without the colons.
     * Also, it allows the use of hyphens or spaces.
     *
     * e.g. `01 02 03 04 05 ab` or `01-02-03-04-05-ab`.
     *
     * @default false
     */
    noColons?: boolean;
}
export type MacCast = ScalarItemCast<MacAlias, MacOpt>;
