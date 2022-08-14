// noinspection JSUnusedGlobalSymbols

import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {ClazzAlias, ClazzOpt} from "./index-types";
import {AbstractFormat} from "../../abstract";
import {stringType} from "@leyyo/scalar";

type _T = ClazzAlias;
type _O = ClazzOpt;

// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('Class', 'Clazz')
class ClazzFormat extends AbstractFormat<_T, _O> {
    @memoize({})
    is(value: unknown, opt?: _O): boolean {
        return leyyo.is.text(value) || leyyo.is.func(value) || leyyo.is.object(value);
    }

    @memoize({})
    cast(value: unknown, opt?: _O): _T {
        return stringType.ly_validate(leyyo.primitive.clazz(value, opt), opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return stringType.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
export const clazzFormat = new ClazzFormat();
export const classFormat = clazzFormat;