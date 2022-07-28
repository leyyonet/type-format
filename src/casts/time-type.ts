import {Fqn} from "@leyyo/fqn";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {TimeAlias, TimeOpt} from "../index-types";
import {AbstractFormat} from "../abstract-format";

type _T = TimeAlias;
type _O = TimeOpt;

// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('IsoTime', 'Time')
export class TimeType extends AbstractFormat<_T, _O> {
    is(value: unknown, opt?: _O): boolean {
        return this._scalar.date.is(value, opt);
    }
    cast(value: unknown, opt?: _O): _T {
        const date = leyyo.primitive.date(value, opt);
        return this._scalar.date.ly_validate(date ? date.toISOString().substring(11) : null, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return this._scalar.date.ly_apiDoc(target, property, openApi, {}, opt);
    }
}