import {NumberOpt, ScalarItemCast, ScalarRangeOpt, StringOpt} from "@leyyo/scalar";
import {TypeOpt} from "@leyyo/core";
import V from "validator";

// region ascii
export type AsciiAlias = string;
export type AsciiOpt = TypeOpt;
export type AsciiCast = ScalarItemCast<AsciiAlias, AsciiOpt>;
// endregion ascii
// region base32
export type Base32Alias = string;
export type Base32Opt = TypeOpt;
export type Base32Cast = ScalarItemCast<Base32Alias, Base32Opt>;
// endregion base32
// region base58
export type Base58Alias = string;
export type Base58Opt = TypeOpt;
export type Base58Cast = ScalarItemCast<Base58Alias, Base58Opt>;
// endregion base58
// region base64
export type Base64Alias = string;
export interface Base64Opt extends StringOpt {
    urlSafe?: boolean;
}
export type Base64Cast = ScalarItemCast<Base64Alias, Base64Opt>;
// endregion base64
// region bic
export type BicAlias = string;
export type BicOpt = TypeOpt;
export type BicCast = ScalarItemCast<BicAlias, BicOpt>;
// endregion bic
// region clazz
export type ClazzAlias = string;
export type ClazzOpt = StringOpt;
export type ClazzCast = ScalarItemCast<ClazzAlias, ClazzOpt>;
// endregion clazz
// region credit-card
export type CreditCardAlias = string;
export type CreditCardOpt = TypeOpt;
export type CreditCardCast = ScalarItemCast<CreditCardAlias, CreditCardOpt>;
// endregion credit-card
// region data-uri
export type DataUriAlias = string;
export type DataUriOpt = TypeOpt;
export type DataUriCast = ScalarItemCast<DataUriAlias, DataUriOpt>;
// endregion data-uri
// region datetime
// yyyy-mmm-dd hh:mm:ii
export type DatetimeAlias = string;
export type DatetimeOpt = StringOpt;
export type DatetimeCast = ScalarItemCast<DatetimeAlias, DatetimeOpt>;
// endregion datetime
// region decimal
export type DecimalAlias = number;
export interface DecimalOpt extends NumberOpt {
    digits?: ScalarRangeOpt;
}
export type DecimalCast = ScalarItemCast<DecimalAlias, DecimalOpt>;
// endregion decimal
// region digit
export type DigitAlias = string;
export type DigitOpt = StringOpt;
export type DigitCast = ScalarItemCast<DigitAlias, DigitOpt>;
// endregion digit
// region hash
export type HashAlias = string;
export interface HashOpt extends StringOpt {
    algorithm?: V.HashAlgorithm;
}
export type HashCast = ScalarItemCast<HashAlias, HashOpt>;
// endregion hash
// region hexadecimal
export type HexadecimalAlias = string;
export type HexadecimalOpt = TypeOpt;
export type HexadecimalCast = ScalarItemCast<HexadecimalAlias, HexadecimalOpt>;
// endregion hexadecimal
// region host
export type HostAlias = string;
export interface HostOpt extends StringOpt {
    ports?: Array<number>;
}
export type HostCast = ScalarItemCast<HostAlias, HostOpt>;
// endregion host
// region host-scheme
export type HostSchemeAlias = string;
export interface HostSchemeOpt extends StringOpt {
    schemes?: Array<string>;
    ports?: Array<number>;
}
export type HostSchemeCast = ScalarItemCast<HostSchemeAlias, HostSchemeOpt>;
// endregion host-scheme
// region iban
export type IbanAlias = string;
export type IbanOpt = TypeOpt;
export type IbanCast = ScalarItemCast<IbanAlias, IbanOpt>;
// endregion iban
// region imei
export type ImeiAlias = string;
export interface ImeiOpt extends StringOpt {
    allowHyphens?: boolean; // allow_hyphens
}
export type ImeiCast = ScalarItemCast<ImeiAlias, ImeiOpt>;
// endregion imei
// region ip
export type IpAddressVersion = 4 | '4' | 6 | '6';
export type IpAlias = string;
export interface IpOpt extends StringOpt {
    version?: IpAddressVersion;
}
export type IpCast = ScalarItemCast<IpAlias, IpOpt>;
// endregion ip
// region iso-date
// yyyy-mmm-dd
export type IsoDateAlias = string;
export type IsoDateOpt = StringOpt;
export type IsoDateCast = ScalarItemCast<IsoDateAlias, IsoDateOpt>;
// endregion iso-date
// region isrc
export type IsrcAlias = string;
export interface IsrcOpt extends StringOpt {
    useHyphens?: boolean;
}
export type IsrcCast = ScalarItemCast<IsrcAlias, IsrcOpt>;
// endregion isrc
// region issn
export type IssnAlias = string;
export interface IssnOpt extends StringOpt {
    /**
     * If `case_sensitive` is `true`, ISSNs with a lowercase `x` as the check digit are rejected.
     *
     * @default false
     */
    caseSensitive?: boolean; // case_sensitive
    /**
     * @default false
     */
    requireHyphen?: boolean; //require_hyphen
}
export type IssnCast = ScalarItemCast<IssnAlias, IssnOpt>;
// endregion issn
// region lat-long
export type LatLongAlias = string;
export type LatLongOpt = TypeOpt;
export type LatLongCast = ScalarItemCast<LatLongAlias, LatLongOpt>;
// endregion lat-long
// region lower-case
export type LowerAlias = string;
export type LowerOpt = TypeOpt;
export type LowerCast = ScalarItemCast<LowerAlias, LowerOpt>;
// endregion lower-case
// region mac-address
export type MacAlias = string;
export interface MacOpt extends TypeOpt {
    /**
     * If `no_colons` is `true`, the validator will allow MAC addresses without the colons.
     * Also, it allows the use of hyphens or spaces.
     *
     * e.g. `01 02 03 04 05 ab` or `01-02-03-04-05-ab`.
     *
     * @default false
     */
    noColons?: boolean;
}
export type MacCast = ScalarItemCast<MacAlias, MacOpt>;
// endregion mac-address
// region md5
export type Md5Alias = string;
export type Md5Opt = TypeOpt;
export type Md5Cast = ScalarItemCast<Md5Alias, Md5Opt>;
// endregion md5
// region mime-type
export type MimeAlias = string;
export interface MimeOpt extends TypeOpt {
    prefixes?: Array<string>;
}
export type MimeCast = ScalarItemCast<MimeAlias, MimeOpt>;
// endregion mime-type
// region mongo-id
export type MongoIdAlias = string;
export type MongoIdOpt = TypeOpt;
export type MongoIdCast = ScalarItemCast<MongoIdAlias, MongoIdOpt>;
// endregion mongo-id
// region multi-byte
export type MultibyteAlias = string;
export type MultibyteOpt = TypeOpt;
export type MultibyteCast = ScalarItemCast<MultibyteAlias, MultibyteOpt>;
// endregion multi-byte
// region passport
export type PassportAlias = string;
export interface PassportOpt extends StringOpt {
    country?: string;
}
export type PassportCast = ScalarItemCast<PassportAlias, PassportOpt>;
// endregion passport
// region port
export type PortAlias = number;
export interface PortOpt extends NumberOpt {
    onlyAllowed?: Array<number>;
}
export type PortCast = ScalarItemCast<PortAlias, PortOpt>;
// endregion port
// region reg-exp
export type RegExpAlias = RegExp;
export interface RegExpOpt extends TypeOpt {
    flags?: string;
}
export type RegExpCast = ScalarItemCast<RegExpAlias, RegExpOpt>;
// endregion reg-exp
// region semver
export type SemVerAlias = string;
export type SemVerOpt = TypeOpt;
export type SemVerCast = ScalarItemCast<SemVerAlias, SemVerOpt>;
// endregion semver
// region time
// hh:mm:ii
export type TimeAlias = string;
export type TimeOpt = StringOpt;
export type TimeCast = ScalarItemCast<TimeAlias, TimeOpt>;
// endregion time
// region upper-case
export type UpperAlias = string;
export type UpperOpt = TypeOpt;
export type UpperCast = ScalarItemCast<UpperAlias, UpperOpt>;
// endregion upper-case





// region nano-id
export type NanoIdAlias = string;
export interface NanoIdOpt extends TypeOpt {
    length?: number;
    nonSecure?: boolean;
    alphabet?: string;
    defaultSize?: number;
}
export interface NanoIdCast extends ScalarItemCast<NanoIdAlias, NanoIdOpt> {
    generate(opt?: NanoIdOpt): NanoIdAlias;
}
// endregion nano-id
// region alpha
export type AlphaAlias = string;
export interface AlphaOpt extends TypeOpt {
    locale?: V.AlphaLocale;
    ignore?: string | RegExp;
}
export type AlphaCast = ScalarItemCast<AlphaAlias, AlphaOpt>;
// endregion alpha
// region alpha-numeric
export type AlphanumericAlias = string;
export interface AlphanumericOpt extends TypeOpt {
    locale?: V.AlphanumericLocale;
    ignore?: string | RegExp;
}
export type AlphanumericCast = ScalarItemCast<AlphanumericAlias, AlphanumericOpt>;
// endregion alpha-numeric
// region byte-length
export type ByteLengthAlias = string;
export interface ByteLengthOpt extends TypeOpt {
    min?: number;
    max?: number;
}
export type ByteLengthCast = ScalarItemCast<ByteLengthAlias, ByteLengthOpt>;
// endregion byte-length
// region email
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
// endregion email
// region fqdn-domain
export type FqdnAlias = string;
export interface FqdnOpt extends TypeOpt {
    /**
     * @default true
     */
    requireTld?: boolean; // require_tld
    /**
     * @default false
     */
    allowUnderscores?: boolean; // allow_underscores
    /**
     * @default false
     */
    allowTrailingDot?: boolean; // allow_trailing_dot
    /**
     * @default false
     */
    allowNumericTld?: boolean; // allow_numeric_tld
    /**
     * If `allow_wildcard` is set to true, the validator will allow domain starting with `*.` (e.g. `*.example.com` or `*.shop.example.com`).
     * @default false
     */
    allowWildcard?: boolean; // allow_wildcard
}
export type FqdnCast = ScalarItemCast<FqdnAlias, FqdnOpt>;

// endregion fqdn-domain
// region hex-color
export type HexColorAlias = string;
export type HexColorOpt = TypeOpt;
export type HexColorCast = ScalarItemCast<HexColorAlias, HexColorOpt>;
// endregion hex-color
// region rgb-color
export type RgbColorAlias = string;
export interface RgbColorOpt extends TypeOpt {
    includePercentValues?: boolean;
}
export type RgbColorCast = ScalarItemCast<RgbColorAlias, RgbColorOpt>;
// endregion rgb-color
// region slug
export type SlugAlias = string;
export type SlugOpt = TypeOpt;
export type SlugCast = ScalarItemCast<SlugAlias, SlugOpt>;
// endregion slug
// region url
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
// endregion url
// region normalized-email
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
// endregion normalized-email
// region utf8
export type Utf8Alias = string;
export type Utf8Opt = TypeOpt;
export type Utf8Cast = ScalarItemCast<Utf8Alias, Utf8Opt>;
// endregion utf8
// region strip-low
export type StripLowAlias = string;
export interface StripLowOpt extends TypeOpt {
    keepNewLines?: boolean;
}
export type StripLowCast = ScalarItemCast<StripLowAlias, StripLowOpt>;
// endregion strip-low
// region unescape
export type UnescapeAlias = string;
export type UnescapeOpt = TypeOpt;
export type UnescapeCast = ScalarItemCast<UnescapeAlias, UnescapeOpt>;
// endregion unescape
// region escape
export type EscapeAlias = string;
export type EscapeOpt = TypeOpt;
export type EscapeCast = ScalarItemCast<EscapeAlias, EscapeOpt>;
// endregion escape
// region locale-date
export type LocaleDateAlias = string;
export interface LocaleDateOpt extends TypeOpt {
    /**
     * @default false
     */
    format?: string;
    /**
     * If strictMode is set to true,
     * the validator will reject inputs different from format.
     *
     * @default false
     */
    strictMode?: boolean;
    /**
     * `delimiters` is an array of allowed date delimiters
     *
     * @default ['/', '-']
     */
    delimiters?: string[];
}
export type LocaleDateCast = ScalarItemCast<LocaleDateAlias, LocaleDateOpt>;
// endregion locale-date
// region locale-date
export type FolderAlias = string;
export interface FolderOpt extends TypeOpt {
    canBeAbsolute?: boolean;
    isLinux?: boolean;
    restricted?: boolean;
}
export interface FolderCast extends ScalarItemCast<FolderAlias, FolderOpt> {
    defCanBeAbsolute(value: boolean): FolderCast;
    defIsLinux(value: boolean): FolderCast;
    defRestricted(value: boolean): FolderCast;
}
// endregion locale-date

// region xxx
// endregion xxx
// region general
export type TypeFormatValidator = (value: unknown, opt?: TypeOpt) => boolean;
export interface TypeFormatLike {
    initialize(): void;
    get alpha(): AlphaCast;
    get alphanumeric(): AlphanumericCast;
    get alphaNumeric(): AlphanumericCast;
    get ascii(): AsciiCast;
    get base32(): Base32Cast;
    get base58(): Base58Cast;
    get base64(): Base64Cast;
    get bic(): BicCast;
    get byteLength(): ByteLengthCast;
    get clazz(): ClazzCast;
    get creditCard(): CreditCardCast;
    get dataUri(): DataUriCast;
    get datetime(): DatetimeCast;
    get decimal(): DecimalCast;
    get digit(): DigitCast;
    get email(): EmailCast;
    get escape(): EscapeCast;
    get folder(): FolderCast;
    get fqdn(): FqdnCast;
    get domain(): FqdnCast;
    get hash(): HashCast;
    get hexColor(): HexColorCast;
    get hexadecimal(): HexadecimalCast;
    get host(): HostCast;
    get hostScheme(): HostSchemeCast;
    get iban(): IbanCast;
    get imei(): ImeiCast;
    get ip(): IpCast;
    get ipAddress(): IpCast;
    get isoDate(): IsoDateCast;
    get isrc(): IsrcCast;
    get issn(): IssnCast;
    get latLong(): LatLongCast;
    get latitudeLongitude(): LatLongCast;
    get localeDate(): LocaleDateCast;
    get lower(): LowerCast;
    get lowerCase(): LowerCast;
    get mac(): MacCast;
    get macAddress(): MacCast;
    get md5(): Md5Cast;
    get mime(): MimeCast;
    get mongoId(): MongoIdCast;
    get multibyte(): MultibyteCast;
    get multiByte(): MultibyteCast;
    get nanoId(): NanoIdCast;
    get normalizedEmail(): NormalizedEmailCast;
    get passport(): PassportCast;
    get port(): PortCast;
    get regExp(): RegExpCast;
    get rgbColor(): RgbColorCast;
    get semver(): SemVerCast;
    get semVer(): SemVerCast;
    get stripLow(): StripLowCast;
    get unicodeSafe(): StripLowCast;
    get time(): TimeCast;
    get unescape(): UnescapeCast;
    get upper(): UpperCast;
    get upperCase(): UpperCast;
    get url(): UrlCast;
}
// endregion general

