import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {ByteLengthAlias, ByteLengthOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = ByteLengthAlias;
type _O = ByteLengthOpt;
@Fqn(...FQN_NAME)
@AssignCast('ByteLength')
class ByteLengthFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'ByteLength';

    protected _is(text: string, opt?: _O): boolean {
        return V.isByteLength(text, opt);
    }
}
export const byteLengthFormat = new ByteLengthFormat();