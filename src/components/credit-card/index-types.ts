import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type CreditCardAlias = string;
export type CreditCardOpt = TypeOpt;
export type CreditCardCast = ScalarItemCast<CreditCardAlias, CreditCardOpt>;
