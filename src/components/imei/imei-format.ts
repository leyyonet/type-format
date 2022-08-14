import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {ImeiAlias, ImeiOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = ImeiAlias;
type _O = ImeiOpt;
@Fqn(...FQN_NAME)
@AssignCast('Imei')
class ImeiFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'imei';

    protected _is(text: string, opt?: _O): boolean {
        return V['isIMEI'](text, this._propertySnake(opt, ['allowHyphens']));
    }
}
export const imeiFormat = new ImeiFormat();