import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type LocaleDateAlias = string;
export interface LocaleDateOpt extends TypeOpt {
    /**
     * @default false
     */
    format?: string;
    /**
     * If strictMode is set to true,
     * the validator will reject inputs different from format.
     *
     * @default false
     */
    strictMode?: boolean;
    /**
     * `delimiters` is an array of allowed date delimiters
     *
     * @default ['/', '-']
     */
    delimiters?: string[];
}
export type LocaleDateCast = ScalarItemCast<LocaleDateAlias, LocaleDateOpt>;
