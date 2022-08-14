import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type HostAlias = string;
export interface HostOpt extends StringOpt {
    ports?: Array<number>;
}
export type HostCast = ScalarItemCast<HostAlias, HostOpt>;
