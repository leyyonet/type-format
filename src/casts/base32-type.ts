import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {Base32Alias, Base32Cast, Base32Opt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = Base32Alias;
type _O = Base32Opt;
@Fqn(...FQN_NAME)
@AssignCast('Base32')
export class Base32Type extends AbstractStringType<_T, _O> implements Base32Cast {
    protected readonly _name: string = 'base32';
    protected _is(text: string, opt?: _O): boolean {
        return V.isBase32(text);
    }
}