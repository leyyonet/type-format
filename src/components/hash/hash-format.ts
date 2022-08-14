import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {HashAlias, HashOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = HashAlias;
type _O = HashOpt;
@Fqn(...FQN_NAME)
@AssignCast('Hash')
class HashFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'Hash';
    protected _is(text: string, opt?: _O): boolean {
        return V.isHash(text, opt?.algorithm);
    }
}
export const hashFormat = new HashFormat();