import {Bind, Fqn} from "@leyyo/fqn";
import {DeveloperException, leyyo, RecLike, TypeOpt} from "@leyyo/core";
import {CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "./internal-component";
import {AbstractFormat} from "./abstract-format";
import {StringOpt} from "@leyyo/scalar";

@Fqn(...FQN_NAME)
@Bind()
export abstract class AbstractStringType<T extends string = string, O extends TypeOpt = StringOpt> extends AbstractFormat<T, O> {
    protected readonly _name: string;
    protected readonly _extraDoc: RecLike = {};

    protected abstract _is(text: string, opt?: O): boolean;
    protected _cast(value: unknown, opt?: O): string {
        return leyyo.primitive.text(value, opt);
    }
    is(value: unknown, opt?: O): boolean {
        if (leyyo.is.empty(value)) {return false;}
        const text = leyyo.primitive.text(value, {silent: true});
        return text && this._is(text, opt);
    }
    cast(value: unknown, opt?: O): T {
        let text = this._cast(value, opt);
        if (text && !this._is(text, opt)) {
            new DeveloperException('scalar.invalid-' + this._name, {field: opt?.field}).with(this).raise(!opt?.silent);
            text = null;
        }
        return this._scalar.string.ly_validate(text, opt) as T;
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, this._extraDoc, opt);
    }
}