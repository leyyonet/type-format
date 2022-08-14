import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {CreditCardAlias, CreditCardOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = CreditCardAlias;
type _O = CreditCardOpt;
@Fqn(...FQN_NAME)
@AssignCast('CreditCard')
class CreditCardFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'CreditCard';
    protected _is(text: string, opt?: _O): boolean {
        return V.isCreditCard(text);
    }
}
export const creditCardFormat = new CreditCardFormat();