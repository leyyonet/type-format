import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type HostSchemeAlias = string;
export interface HostSchemeOpt extends StringOpt {
    schemes?: Array<string>;
    ports?: Array<number>;
}
export type HostSchemeCast = ScalarItemCast<HostSchemeAlias, HostSchemeOpt>;
