import {Fqn} from "@leyyo/fqn";
import {DeveloperException, leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {scalar} from "@leyyo/scalar";
import {FQN_NAME} from "../internal-component";
import {PortAlias, PortOpt} from "../index-types";
import {AbstractFormat} from "../abstract-format";

type _T = PortAlias;
type _O = PortOpt;
// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('Port')
export class PortType extends AbstractFormat<_T, _O> {
    protected readonly _name: string = 'port';
    is(value: unknown, opt?: _O): boolean {
        if (!leyyo.is.integer(value)) {
            return false;
        }
        if (!scalar.integer.inRange(value as _T, 0, 65535)) {
            return false;
        }
        return !(leyyo.is.array(opt?.onlyAllowed) && !opt?.onlyAllowed.includes(value as _T));
    }

    cast(value: unknown, opt?: _O): _T {
        let int = leyyo.primitive.integer(value, opt);
        if (int !== null) {
            if (!scalar.integer.inRange(value as _T, 0, 65535)) {
                new DeveloperException('scalar.not-range-port', {field: opt?.field}).with(this).raise(!opt?.silent);
                int = null;
            }
            if (int !== null && leyyo.is.array(opt?.onlyAllowed) && !opt?.onlyAllowed.includes(value as _T)) {
                new DeveloperException('scalar.not-in-allowed', {field: opt?.field}).with(this).raise(!opt?.silent);
                int = null;
            }
        }
        return this._scalar.integer.ly_validate(value, opt) as _T;
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return this._scalar.integer.ly_apiDoc(target, property, openApi, {}, opt);
    }
}