import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {Md5Alias, Md5Opt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = Md5Alias;
type _O = Md5Opt;
@Fqn(...FQN_NAME)
@AssignCast('Md5')
export class Md5Type extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'md5';
    protected _is(text: string, opt?: _O): boolean {
        return V.isMD5(text);
    }
}