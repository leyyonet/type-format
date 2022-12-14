import V from "validator";
import {leyyo} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {EscapeAlias, EscapeCast, EscapeOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

// @todo
type _T = EscapeAlias;
type _O = EscapeOpt;
@Fqn(...FQN_NAME)
@AssignCast('Escape')
class EscapeFormat extends AbstractStringFormat<_T, _O> implements EscapeCast {
    protected readonly _name: string = 'Escape';
    protected _is(text: string, opt?: _O): boolean {
        return !!V.escape(text);
    }

    protected _cast(value: unknown, opt?: _O): _T {
        const text = leyyo.primitive.text(value, opt);
        return text ? V.escape(text) : null;
    }
}
export const escapeFormat = new EscapeFormat();