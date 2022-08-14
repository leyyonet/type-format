import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type MimeAlias = string;
export interface MimeOpt extends TypeOpt {
    prefixes?: Array<string>;
}
export type MimeCast = ScalarItemCast<MimeAlias, MimeOpt>;
