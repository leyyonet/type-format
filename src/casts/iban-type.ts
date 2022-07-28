import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {IbanAlias, IbanOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = IbanAlias;
type _O = IbanOpt;
@Fqn(...FQN_NAME)
@AssignCast('Iban')
export class IbanType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'iban';
    protected _is(text: string, opt?: _O): boolean {
        return V.isIBAN(text);
    }
}