import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {IbanAlias, IbanOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = IbanAlias;
type _O = IbanOpt;
@Fqn(...FQN_NAME)
@AssignCast('Iban')
class IbanFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'iban';
    protected _is(text: string, opt?: _O): boolean {
        return V.isIBAN(text);
    }
}
export const ibanFormat = new IbanFormat();