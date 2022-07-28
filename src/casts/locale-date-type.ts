import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {LocaleDateAlias, LocaleDateOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = LocaleDateAlias;
type _O = LocaleDateOpt;
@Fqn(...FQN_NAME)
@AssignCast('LocaleDate')
export class LocaleDateType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'LocaleDate';
    protected _is(text: string, opt?: _O): boolean {
        return V.isDate(text, opt);
    }
}