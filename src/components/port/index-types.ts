import {NumberOpt, ScalarItemCast} from "@leyyo/scalar";

export type PortAlias = number;
export interface PortOpt extends NumberOpt {
    onlyAllowed?: Array<number>;
}
export type PortCast = ScalarItemCast<PortAlias, PortOpt>;
