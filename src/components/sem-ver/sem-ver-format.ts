import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {SemVerAlias, SemVerOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = SemVerAlias;
type _O = SemVerOpt;
@Fqn(...FQN_NAME)
@AssignCast('SemVer', 'Semver')
class SemVerFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'semver';
    protected _is(text: string, opt?: _O): boolean {
        return V.isSemVer(text);
    }
}
export const semVerFormat = new SemVerFormat();