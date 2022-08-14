import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type EmailAlias = string;
export interface EmailOpt extends TypeOpt {
    /**
     * If `allow_display_name` is set to `true`, the validator will also match `Display Name <email-address>`.
     *
     * @default false
     */
    allowDisplayName?: boolean; // allow_display_name
    /**
     * If `require_display_name` is set to `true`, the validator will reject strings without the format `Display Name <email-address>`.
     *
     * @default false
     */
    requireDisplayName?: boolean; // require_display_name
    /**
     * If `allow_utf8_local_part` is set to `false`, the validator will not allow any non-English UTF8 character in email address' local part.
     *
     * @default true
     */
    allowUtf8LocalPart?: boolean; // allow_utf8_local_part
    /**
     * If `require_tld` is set to `false`, e-mail addresses without having TLD in their domain will also be matched.
     *
     * @default true
     */
    requireTld?: boolean; // require_tld
    /**
     * If `ignore_max_length` is set to `true`, the validator will not check for the standard max length of an email.
     *
     * @default false
     */
    ignoreMaxLength?: boolean; // ignore_max_length
    /**
     * If `allow_ip_domain` is set to `true`, the validator will allow IP addresses in the host part.
     *
     * @default false
     */
    allowIpDomain?: boolean; // allow_ip_domain
    /**
     * If `domain_specific_validation` is `true`, some additional validation will be enabled,
     * e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
     *
     * @default false
     */
    domainSpecificValidation?: boolean; // domain_specific_validation
    /**
     *  If host_blacklist is set to an array of strings
     *  and the part of the email after the @ symbol matches one of the strings defined in it,
     *  the validation fails.
     */
    hostBlacklist?: string[]; // host_blacklist
}
export type EmailCast = ScalarItemCast<EmailAlias, EmailOpt>;
