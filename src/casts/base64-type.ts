import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {Base64Alias, Base64Cast, Base64Opt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = Base64Alias;
type _O = Base64Opt;
@Fqn(...FQN_NAME)
@AssignCast('Base64')
export class Base64Type extends AbstractStringType<_T, _O> implements Base64Cast {
    protected readonly _name: string = 'base64';

    protected _is(text: string, opt?: _O): boolean {
        return V.isBase64(text, opt);
    }
}