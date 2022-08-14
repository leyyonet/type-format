import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type NormalizedEmailAlias = string;
export interface NormalizedEmailOpt extends TypeOpt {
    lowercase?: boolean;
    removeDots?: boolean;
    removeSubAddress?: boolean;
    convertAliasDomains?: boolean;
}
export interface NormalizedEmailCast extends ScalarItemCast<NormalizedEmailAlias, NormalizedEmailOpt> {
    optRemoveDotDomains(domains: Array<string>): NormalizedEmailCast;
    optRemoveSubAddressDomains(domains: Array<string>): NormalizedEmailCast;
    optConvertAliasDomains(domains: Array<string>): NormalizedEmailCast;
}
