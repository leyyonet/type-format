import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type IpAddressVersion = 4 | '4' | 6 | '6';
export type IpAlias = string;
export interface IpOpt extends StringOpt {
    version?: IpAddressVersion;
}
export type IpCast = ScalarItemCast<IpAlias, IpOpt>;
