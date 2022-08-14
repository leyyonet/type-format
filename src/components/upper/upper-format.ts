import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {UpperAlias, UpperOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = UpperAlias;
type _O = UpperOpt;
@Fqn(...FQN_NAME)
@AssignCast('Upper')
class UpperFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'md5';
    protected _is(text: string, opt?: _O): boolean {
        return V.isUppercase(text);
    }
}
export const upperFormat = new UpperFormat();