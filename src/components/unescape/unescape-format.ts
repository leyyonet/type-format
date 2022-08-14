import V from "validator";
import {leyyo} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {UnescapeAlias, UnescapeCast, UnescapeOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

// @todo
type _T = UnescapeAlias;
type _O = UnescapeOpt;
@Fqn(...FQN_NAME)
@AssignCast('Unescape')
class UnescapeFormat extends AbstractStringFormat<_T, _O> implements UnescapeCast {
    protected readonly _name: string = 'Unescape';
    protected _is(text: string, opt?: _O): boolean {
        return !!V.unescape(text);
    }

    protected _cast(value: unknown, opt?: _O): _T {
        const text = leyyo.primitive.text(value, opt);
        return text ? V.unescape(text) : null;
    }
}
export const unescapeFormat = new UnescapeFormat();