import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {DigitAlias, DigitOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = DigitAlias;
type _O = DigitOpt;

@Fqn(...FQN_NAME)
@AssignCast('Digit')
class DigitFormat extends AbstractStringFormat<_T, _O> {
    protected static _PATTERN_ID = /^\d+$/;
    protected readonly _name: string = 'digit';

    protected _is(text: string, opt?: _O): boolean {
        return DigitFormat._PATTERN_ID.test(text);
    }
}
export const digitFormat = new DigitFormat();