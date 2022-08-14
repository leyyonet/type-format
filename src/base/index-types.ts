import {
    AlphaCast,
    AlphanumericCast,
    AsciiCast,
    Base32Cast,
    Base58Cast,
    Base64Cast,
    BicCast,
    ByteLengthCast,
    ClazzCast,
    CreditCardCast,
    DataUriCast,
    DatetimeCast,
    DecimalCast,
    DigitCast,
    EmailCast,
    EscapeCast,
    FolderCast,
    FqdnCast,
    HashCast,
    HexadecimalCast,
    HexColorCast,
    HostCast,
    HostSchemeCast,
    IbanCast,
    ImeiCast,
    IpCast,
    IsoDateCast,
    IsrcCast,
    IssnCast,
    LatLongCast,
    LocaleDateCast,
    LowerCast,
    MacCast,
    Md5Cast,
    MimeCast,
    MongoIdCast,
    MultibyteCast,
    NanoIdCast,
    NormalizedEmailCast,
    PassportCast,
    PortCast,
    RegExpCast,
    RgbColorCast,
    SemVerCast,
    StripLowCast,
    TimeCast,
    UnescapeCast,
    UpperCast,
    UrlCast
} from "../components";

export interface TypeFormatLike {
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
    get mimeType(): MimeCast;
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
