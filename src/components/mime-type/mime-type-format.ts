import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {leyyo} from "@leyyo/core";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {MimeAlias, MimeOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = MimeAlias;
type _O = MimeOpt;
@Fqn(...FQN_NAME)
@AssignCast('Mime', 'MimeType')
class MimeTypeFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'mime-type';
    protected _is(text: string, opt?: _O): boolean {
        if (!V.isMimeType(text)) {
            return false;
        }
        return !(leyyo.is.array(opt?.prefixes) && !opt.prefixes.some(prefix => prefix === text));
    }
}
export const mimeTypeFormat = new MimeTypeFormat();
export const mimeFormat = mimeTypeFormat;