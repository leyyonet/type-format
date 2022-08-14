import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {IsrcAlias, IsrcOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = IsrcAlias;
type _O = IsrcOpt;
@Fqn(...FQN_NAME)
@AssignCast('Isrc')
class IsrcFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'isrc';

    protected _is(text: string, opt?: _O): boolean {
        if (opt?.useHyphens === undefined) {
            return /^[A-Z]{2}-[0-9A-Z]{3}-\d{2}-\d{5}$/.test(text) || /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/.test(text);
        }
        if (opt?.useHyphens) {
            return /^[A-Z]{2}-[0-9A-Z]{3}-\d{2}-\d{5}$/.test(text);
        }
        return /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/.test(text);
    }
}
export const isrcFormat = new IsrcFormat();