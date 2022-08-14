import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type IbanAlias = string;
export type IbanOpt = TypeOpt;
export type IbanCast = ScalarItemCast<IbanAlias, IbanOpt>;
