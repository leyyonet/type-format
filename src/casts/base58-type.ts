import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {Base58Alias, Base58Cast, Base58Opt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = Base58Alias;
type _O = Base58Opt;
@Fqn(...FQN_NAME)
@AssignCast('Base58')
export class Base58Type extends AbstractStringType<_T, _O> implements Base58Cast {
    protected readonly _name: string = 'base58';
    protected _is(text: string, opt?: _O): boolean {
        return V.isBase58(text);
    }
}