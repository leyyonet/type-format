import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type SemVerAlias = string;
export type SemVerOpt = TypeOpt;
export type SemVerCast = ScalarItemCast<SemVerAlias, SemVerOpt>;
