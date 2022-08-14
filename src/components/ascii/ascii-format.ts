import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {AsciiAlias, AsciiCast, AsciiOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = AsciiAlias;
type _O = AsciiOpt;
@Fqn(...FQN_NAME)
@AssignCast('Ascii')
class AsciiFormat extends AbstractStringFormat<_T, _O> implements AsciiCast {
    protected readonly _name: string = 'Ascii';
    protected _is(text: string, opt?: _O): boolean {
        return V.isAscii(text);
    }
}
export const asciiFormat = new AsciiFormat();