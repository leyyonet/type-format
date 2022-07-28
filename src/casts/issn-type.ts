import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {IssnAlias, IssnOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = IssnAlias;
type _O = IssnOpt;
@Fqn(...FQN_NAME)
@AssignCast('Issn')
export class IssnType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'issn';

    protected _is(text: string, opt?: _O): boolean {
        return V.isISSN(text, this._propertySnake<V.IsISSNOptions>(opt, ['caseSensitive', 'requireHyphen']));
    }
}