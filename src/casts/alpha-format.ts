import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {AlphaAlias, AlphaCast, AlphaOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = AlphaAlias;
type _O = AlphaOpt;
@Fqn(...FQN_NAME)
@AssignCast('Alpha')
export class AlphaFormat extends AbstractStringType<_T, _O> implements AlphaCast {
    protected readonly _name: string = 'Alpha';

    protected _is(text: string, opt?: _O): boolean {
        return V.isAlpha(text, opt?.locale, opt);
    }
}