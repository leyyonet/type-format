import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {MultibyteAlias, MultibyteOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = MultibyteAlias;
type _O = MultibyteOpt;
@Fqn(...FQN_NAME)
@AssignCast('Multibyte')
export class MultibyteType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'multibyte';
    protected _is(text: string, opt?: _O): boolean {
        return V.isMultibyte(text);
    }
}