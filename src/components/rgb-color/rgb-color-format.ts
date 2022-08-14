import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {RgbColorAlias, RgbColorCast, RgbColorOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = RgbColorAlias;
type _O = RgbColorOpt;
@Fqn(...FQN_NAME)
@AssignCast('RgbColor')
class RgbColorFormat extends AbstractStringFormat<_T, _O> implements RgbColorCast {
    protected readonly _name: string = 'RgbColor';
    protected _is(text: string, opt?: _O): boolean {
        return V.isRgbColor(text, opt?.includePercentValues);
    }
}
export const rgbColorFormat = new RgbColorFormat();