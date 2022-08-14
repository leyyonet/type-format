import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {AlphaAlias, AlphaCast, AlphaOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = AlphaAlias;
type _O = AlphaOpt;

@Fqn(...FQN_NAME)
@AssignCast('Alpha')
class AlphaFormat extends AbstractStringFormat<_T, _O> implements AlphaCast {
    protected readonly _name: string = 'Alpha';

    protected _is(text: string, opt?: _O): boolean {
        return V.isAlpha(text, opt?.locale, opt);
    }
}
export const alphaFormat = new AlphaFormat();
