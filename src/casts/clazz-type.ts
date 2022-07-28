import {Fqn} from "@leyyo/fqn";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {ClazzAlias, ClazzOpt} from "../index-types";
import {AbstractFormat} from "../abstract-format";

type _T = ClazzAlias;
type _O = ClazzOpt;
// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('Class', 'Clazz')
export class ClazzType extends AbstractFormat<_T, _O> {
    is(value: unknown, opt?: _O): boolean {
        return leyyo.is.text(value) || leyyo.is.func(value) || leyyo.is.object(value);
    }

    cast(value: unknown, opt?: _O): _T {
        return this._scalar.string.ly_validate(leyyo.primitive.clazz(value, opt), opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}