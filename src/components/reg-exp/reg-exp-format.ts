import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {Exception, leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse, castPool} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {RegExpAlias, RegExpOpt} from "./index-types";
import {AbstractFormat} from "../../abstract";
import {stringType} from "@leyyo/scalar";

type _T = RegExpAlias;
type _O = RegExpOpt;
@Fqn(...FQN_NAME)
@AssignCast('RegExp')
class RegExpFormat extends AbstractFormat<_T, _O> {
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
    @memoize({})
    is(value: unknown, opt?: _O): boolean {
        return !leyyo.is.empty(value) && !!this._check(value, opt);
    }
    @memoize({})
    cast(value: unknown, opt?: _O): _T {
        return this._check(value, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return stringType.ly_apiDoc(target, property, openApi, {}, opt);
    }
    static {
        castPool.copy(RegExpFormat, RegExp);
    }
}
export const regExpFormat = new RegExpFormat();