import {Fqn} from "@leyyo/fqn";
import {Exception, leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse, castPool} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {RegExpAlias, RegExpOpt} from "../index-types";
import {AbstractFormat} from "../abstract-format";

type _T = RegExpAlias;
type _O = RegExpOpt;
@Fqn(...FQN_NAME)
@AssignCast('RegExp')
export class RegExpType extends AbstractFormat<_T, _O> {
    protected _check(value: unknown, opt?: _O): _T {
        if (value instanceof RegExp) {
            return value;
        }
        if (typeof value === 'string') {
            try {
                return new RegExp(value, opt?.flags ?? 'i');
            } catch (e) {
                Exception.cast(e).raise(!opt?.silent);
            }
        }
        return null;
    }
    is(value: unknown, opt?: _O): boolean {
        return !leyyo.is.empty(value) && !!this._check(value, opt);
    }
    cast(value: unknown, opt?: _O): _T {
        return this._check(value, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
castPool.copy(RegExpType, RegExp);