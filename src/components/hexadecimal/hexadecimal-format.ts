import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {HexadecimalAlias, HexadecimalOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = HexadecimalAlias;
type _O = HexadecimalOpt;
@Fqn(...FQN_NAME)
@AssignCast('Hexadecimal')
class HexadecimalFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'hexadecimal';
    protected _is(text: string, opt?: _O): boolean {
        return V.isHexadecimal(text);
    }
}
export const hexadecimalFormat = new HexadecimalFormat();