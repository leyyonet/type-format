import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {LatLongAlias, LatLongOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = LatLongAlias;
type _O = LatLongOpt;
@Fqn(...FQN_NAME)
@AssignCast('LatLong')
class LatLongFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'lat-long';
    protected _is(text: string, opt?: _O): boolean {
        return V.isLatLong(text);
    }
}
export const latLongFormat = new LatLongFormat();