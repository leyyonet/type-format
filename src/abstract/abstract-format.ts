import {leyyo, TypeOpt} from "@leyyo/core";
import {Bind, Fqn} from "@leyyo/fqn";
import {AbstractScalar, StringOpt} from "@leyyo/scalar";
import {FQN_NAME} from "../internal-component";
import {TypeFormatLike} from "../base";

@Fqn(...FQN_NAME)
@Bind()
export abstract class AbstractFormat<T = string, O extends TypeOpt = StringOpt> extends AbstractScalar<T, O> {
    static base: TypeFormatLike;
    protected static _PATTERN_SNAKE = /([A-Z])/g;

    protected _snake(value: string): string {
        return value.replace( AbstractFormat._PATTERN_SNAKE, " $1" ).split(' ').join('_').toLowerCase();
    }
    protected _propertySnake<_O = O>(opt: O, keys: Array<string>): _O {
        if (!leyyo.is.object(opt)) {
            return {} as _O;
        }
        const result = {...opt} as unknown as _O;
        keys.forEach(key => {
            if (result[key] !== undefined) {
                result[this._snake(key)] = result[key];
            }
        });
        return result;
    }
}