import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {MacAlias, MacOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = MacAlias;
type _O = MacOpt;
@Fqn(...FQN_NAME)
@AssignCast('Mac', 'MacAddress')
class MacFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'mac';

    protected _is(text: string, opt?: _O): boolean {
        return V.isMACAddress(text, this._propertySnake<V.IsMACAddressOptions>(opt, ['noColons']));
    }
}
export const macFormat = new MacFormat();
export const macAddressFormat = macFormat;