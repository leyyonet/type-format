import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {DigitAlias, DigitOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = DigitAlias;
type _O = DigitOpt;

@Fqn(...FQN_NAME)
@AssignCast('Digit')
export class DigitType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'digit';

    protected _is(text: string, opt?: _O): boolean {
        return /^[0-9]+$/.test(text);
    }

}