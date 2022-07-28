import {Fqn} from "@leyyo/fqn";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {DatetimeAlias, DatetimeOpt} from "../index-types";
import {AbstractFormat} from "../abstract-format";

type _T = DatetimeAlias;
type _O = DatetimeOpt;

// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('IsoDatetime', 'Datetime')
export class DatetimeType extends AbstractFormat<_T, _O> {
    is(value: unknown, opt?: _O): boolean {
        return this._scalar.date.is(value, opt);
    }

    cast(value: unknown, opt?: _O): _T {
        const date = leyyo.primitive.date(value, opt);
        return this._scalar.date.ly_validate(date ? date.toISOString() : null, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}