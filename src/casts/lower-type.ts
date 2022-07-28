import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {LowerAlias, LowerOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = LowerAlias;
type _O = LowerOpt;
@Fqn(...FQN_NAME)
@AssignCast('Lower')
export class LowerType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'Lower';
    protected _is(text: string, opt?: _O): boolean {
        return V.isLowercase(text);
    }
}