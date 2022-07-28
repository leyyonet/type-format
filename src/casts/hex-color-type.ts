import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {HexColorAlias, HexColorOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = HexColorAlias;
type _O = HexColorOpt;
@Fqn(...FQN_NAME)
@AssignCast('HexColor')
export class HexColorType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'HexColor';
    protected _is(text: string, opt?: _O): boolean {
        return V.isHexColor(text);
    }
}