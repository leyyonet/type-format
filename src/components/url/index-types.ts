import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type UrlAlias = string;
export interface UrlOpt extends TypeOpt {
    /**
     * @default ['http','https','ftp']
     */
    protocols?: string[];
    /**
     * @default true
     */
    requireTld?: boolean; // require_tld
    /**
     * @default false
     */
    requireProtocol?: boolean; // require_protocol
    /**
     * @default true
     */
    requireHost?: boolean; // require_host
    /**
     * if set as true isURL will check if port is present in the URL
     * @default false
     */
    requirePort?: boolean; // require_port
    /**
     * @default true
     */
    requireValidProtocol?: boolean; // require_valid_protocol
    /**
     * @default false
     */
    allowUnderscores?: boolean; // allow_underscores
    /**
     * @default false
     */
    hostWhitelist?: Array<string | RegExp>; // host_whitelist
    /**
     * @default false
     */
    hostBlacklist?: Array<string | RegExp>; // host_blacklist
    /**
     * @default false
     */
    allowTrailingDot?: boolean; // allow_trailing_dot
    /**
     * @default false
     */
    allowProtocolRelativeUrls?: boolean; // allow_protocol_relative_urls
    /**
     * @default false
     */
    disallowAuth?: boolean; // disallow_auth
    /**
     * @default true
     */
    allowFragments?: boolean; // allow_fragments
    /**
     * @default true
     */
    allowQueryComponents?: boolean; // allow_query_components
}
export type UrlCast = ScalarItemCast<UrlAlias, UrlOpt>;
