import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {IsoDateAlias, IsoDateOpt} from "./index-types";
import {AbstractFormat} from "../../abstract";
import {dateType} from "@leyyo/scalar";

type _T = IsoDateAlias;
type _O = IsoDateOpt;

// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('IsoDate')
class IsoDateFormat extends AbstractFormat<_T, _O> {
    @memoize({})
    is(value: unknown, opt?: _O): boolean {
        return dateType.is(value, opt);
    }
    @memoize({})
    cast(value: unknown, opt?: _O): _T {
        const date = leyyo.primitive.date(value, opt);
        return dateType.ly_validate(date ? date.toISOString().substring(0, 10) : null, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return dateType.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
export const isoDateFormat = new IsoDateFormat();
