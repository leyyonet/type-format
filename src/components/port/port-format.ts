import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {DeveloperException, leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {integerType} from "@leyyo/scalar";
import {FQN_NAME} from "../../internal-component";
import {PortAlias, PortOpt} from "./index-types";
import {AbstractFormat} from "../../abstract";

type _T = PortAlias;
type _O = PortOpt;
// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('Port')
class PortFormat extends AbstractFormat<_T, _O> {
    protected readonly _name: string = 'port';
    @memoize({})
    is(value: unknown, opt?: _O): boolean {
        if (!leyyo.is.integer(value)) {
            return false;
        }
        if (!integerType.inRange(value as _T, 0, 65535)) {
            return false;
        }
        return !(leyyo.is.array(opt?.onlyAllowed) && !opt?.onlyAllowed.includes(value as _T));
    }

    @memoize({})
    cast(value: unknown, opt?: _O): _T {
        let int = leyyo.primitive.integer(value, opt);
        if (int !== null) {
            if (!integerType.inRange(value as _T, 0, 65535)) {
                new DeveloperException('scalar.not-range-port', {field: opt?.field}).with(this).raise(!opt?.silent);
                int = null;
            }
            if (int !== null && leyyo.is.array(opt?.onlyAllowed) && !opt?.onlyAllowed.includes(value as _T)) {
                new DeveloperException('scalar.not-in-allowed', {field: opt?.field}).with(this).raise(!opt?.silent);
                int = null;
            }
        }
        return integerType.ly_validate(value, opt) as _T;
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return integerType.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
export const portFormat = new PortFormat();