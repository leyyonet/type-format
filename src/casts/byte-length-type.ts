import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {ByteLengthAlias, ByteLengthOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = ByteLengthAlias;
type _O = ByteLengthOpt;
@Fqn(...FQN_NAME)
@AssignCast('ByteLength')
export class ByteLengthType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'ByteLength';

    protected _is(text: string, opt?: _O): boolean {
        return V.isByteLength(text, opt);
    }
}