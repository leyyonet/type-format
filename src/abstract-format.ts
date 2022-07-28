import {leyyo, TypeOpt} from "@leyyo/core";
import {Bind, Fqn} from "@leyyo/fqn";
import {AbstractScalar, scalar, StringOpt} from "@leyyo/scalar";
import {TypeFormatLike} from "./index-types";
import {FQN_NAME} from "./internal-component";

@Fqn(...FQN_NAME)
@Bind()
export abstract class AbstractFormat<T = string, O extends TypeOpt = StringOpt> extends AbstractScalar<T, O> {
    protected readonly _typeFormat: TypeFormatLike;
    constructor(typeFormat: TypeFormatLike) {
        super(scalar);
        this._typeFormat = typeFormat;
    }
    protected _snake(value: string): string {
        return value.replace( /([A-Z])/g, " $1" ).split(' ').join('_').toLowerCase();
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