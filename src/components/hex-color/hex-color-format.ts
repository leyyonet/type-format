import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {HexColorAlias, HexColorOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = HexColorAlias;
type _O = HexColorOpt;
@Fqn(...FQN_NAME)
@AssignCast('HexColor')
class HexColorFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'HexColor';
    protected _is(text: string, opt?: _O): boolean {
        return V.isHexColor(text);
    }
}
export const hexColorFormat = new HexColorFormat();