import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {HashAlias, HashOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = HashAlias;
type _O = HashOpt;
@Fqn(...FQN_NAME)
@AssignCast('Hash')
export class HashType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'Hash';
    protected _is(text: string, opt?: _O): boolean {
        return V.isHash(text, opt?.algorithm);
    }
}