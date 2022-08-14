import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {AlphanumericAlias, AlphanumericCast, AlphanumericOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = AlphanumericAlias;
type _O = AlphanumericOpt;
@Fqn(...FQN_NAME)
@AssignCast('Alphanumeric')
class AlphanumericFormat extends AbstractStringFormat<_T, _O> implements AlphanumericCast {
    protected readonly _name: string = 'Alphanumeric';

    protected _is(text: string, opt?: _O): boolean {
        return V.isAlphanumeric(text, opt?.locale, opt);
    }
}
export const alphanumericFormat = new AlphanumericFormat();