import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {LowerAlias, LowerOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = LowerAlias;
type _O = LowerOpt;
@Fqn(...FQN_NAME)
@AssignCast('Lower')
class LowerFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'Lower';
    protected _is(text: string, opt?: _O): boolean {
        return V.isLowercase(text);
    }
}
export const lowerFormat = new LowerFormat();