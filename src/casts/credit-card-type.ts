import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {CreditCardAlias, CreditCardOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = CreditCardAlias;
type _O = CreditCardOpt;
@Fqn(...FQN_NAME)
@AssignCast('CreditCard')
export class CreditCardType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'CreditCard';
    protected _is(text: string, opt?: _O): boolean {
        return V.isCreditCard(text);
    }
}