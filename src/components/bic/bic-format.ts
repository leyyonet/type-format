import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {BicAlias, BicCast, BicOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = BicAlias;
type _O = BicOpt;
@Fqn(...FQN_NAME)
@AssignCast('Bic')
class BicFormat extends AbstractStringFormat<_T, _O> implements BicCast {
    protected readonly _name: string = 'bic';
    protected _is(text: string, opt?: _O): boolean {
        return V.isBIC(text);
    }
}
export const bicFormat = new BicFormat();