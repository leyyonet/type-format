import {leyyo} from "@leyyo/core";
import {Bind, Fqn} from "@leyyo/fqn";
import {COMPONENT_NAME, FQN_NAME} from "../internal-component";
import {
    AlphaCast,
    alphaFormat,
    AlphanumericCast,
    alphanumericFormat,
    AsciiCast,
    asciiFormat,
    Base32Cast,
    base32Format,
    Base58Cast,
    base58Format,
    Base64Cast,
    base64Format,
    BicCast,
    bicFormat,
    ByteLengthCast,
    byteLengthFormat,
    ClazzCast,
    clazzFormat,
    CreditCardCast,
    creditCardFormat,
    DataUriCast,
    dataUriFormat,
    DatetimeCast,
    datetimeFormat,
    DecimalCast,
    decimalFormat,
    DigitCast,
    digitFormat,
    EmailCast,
    emailFormat,
    EscapeCast,
    escapeFormat,
    FolderCast,
    folderFormat,
    FqdnCast,
    fqdnFormat,
    HashCast,
    hashFormat,
    HexadecimalCast,
    hexadecimalFormat,
    HexColorCast,
    hexColorFormat,
    HostCast,
    hostFormat,
    HostSchemeCast,
    hostSchemeFormat,
    IbanCast,
    ibanFormat,
    ImeiCast,
    imeiFormat,
    IpCast,
    ipFormat,
    IsoDateCast,
    isoDateFormat,
    IsrcCast,
    isrcFormat,
    IssnCast,
    issnFormat,
    LatLongCast,
    latLongFormat,
    LocaleDateCast,
    localeDateFormat,
    LowerCast,
    lowerFormat,
    MacCast,
    macFormat,
    Md5Cast,
    md5Format,
    MimeCast,
    mimeTypeFormat,
    MongoIdCast,
    mongoIdFormat,
    MultibyteCast,
    multibyteFormat,
    NanoIdCast,
    nanoIdFormat,
    NormalizedEmailCast,
    normalizedEmailFormat,
    PassportCast,
    passportFormat,
    PortCast,
    portFormat,
    RegExpCast,
    regExpFormat,
    RgbColorCast,
    rgbColorFormat,
    SemVerCast,
    semVerFormat,
    StripLowCast,
    stripLowFormat,
    TimeCast,
    timeFormat,
    UnescapeCast,
    unescapeFormat,
    UpperCast,
    upperFormat,
    UrlCast,
    urlFormat
} from "../components";
import {TypeFormatLike} from "./index-types";
import {AbstractFormat} from "../abstract";


// noinspection JSUnusedGlobalSymbols
@Fqn(...FQN_NAME)
@Bind()
class TypeFormat implements TypeFormatLike {
    // region methods
    constructor() {
        leyyo.component.add(COMPONENT_NAME);
    }


    // endregion methods

    // region getters
    get alpha(): AlphaCast {
        return alphaFormat;
    }

    get alphaNumeric(): AlphanumericCast {
        return alphanumericFormat;
    }

    get alphanumeric(): AlphanumericCast {
        return alphanumericFormat;
    }

    get ascii(): AsciiCast {
        return asciiFormat;
    }

    get base32(): Base32Cast {
        return base32Format;
    }

    get base58(): Base58Cast {
        return base58Format;
    }

    get base64(): Base64Cast {
        return base64Format;
    }

    get bic(): BicCast {
        return bicFormat;
    }

    get byteLength(): ByteLengthCast {
        return byteLengthFormat;
    }

    get clazz(): ClazzCast {
        return clazzFormat;
    }

    get creditCard(): CreditCardCast {
        return creditCardFormat;
    }

    get dataUri(): DataUriCast {
        return dataUriFormat;
    }

    get datetime(): DatetimeCast {
        return datetimeFormat;
    }

    get decimal(): DecimalCast {
        return decimalFormat;
    }

    get digit(): DigitCast {
        return digitFormat;
    }

    get domain(): FqdnCast {
        return fqdnFormat;
    }

    get email(): EmailCast {
        return emailFormat;
    }

    get escape(): EscapeCast {
        return escapeFormat;
    }

    get folder(): FolderCast {
        return folderFormat;
    }

    get fqdn(): FqdnCast {
        return fqdnFormat;
    }

    get hash(): HashCast {
        return hashFormat;
    }

    get hexColor(): HexColorCast {
        return hexColorFormat;
    }

    get hexadecimal(): HexadecimalCast {
        return hexadecimalFormat;
    }

    get host(): HostCast {
        return hostFormat;
    }

    get hostScheme(): HostSchemeCast {
        return hostSchemeFormat;
    }

    get iban(): IbanCast {
        return ibanFormat;
    }

    get imei(): ImeiCast {
        return imeiFormat;
    }

    get ip(): IpCast {
        return ipFormat;
    }

    get ipAddress(): IpCast {
        return ipFormat;
    }

    get isoDate(): IsoDateCast {
        return isoDateFormat;
    }

    get isrc(): IsrcCast {
        return isrcFormat;
    }

    get issn(): IssnCast {
        return issnFormat;
    }

    get latLong(): LatLongCast {
        return latLongFormat;
    }

    get latitudeLongitude(): LatLongCast {
        return latLongFormat;
    }

    get localeDate(): LocaleDateCast {
        return localeDateFormat;
    }

    get lower(): LowerCast {
        return lowerFormat;
    }

    get lowerCase(): LowerCast {
        return lowerFormat;
    }

    get mac(): MacCast {
        return macFormat;
    }

    get macAddress(): MacCast {
        return macFormat;
    }

    get md5(): Md5Cast {
        return md5Format;
    }

    get mime(): MimeCast {
        return mimeTypeFormat;
    }
    get mimeType(): MimeCast {
        return mimeTypeFormat;
    }

    get mongoId(): MongoIdCast {
        return mongoIdFormat;
    }

    get multiByte(): MultibyteCast {
        return multibyteFormat;
    }

    get multibyte(): MultibyteCast {
        return multibyteFormat;
    }

    get nanoId(): NanoIdCast {
        return nanoIdFormat;
    }

    get normalizedEmail(): NormalizedEmailCast {
        return normalizedEmailFormat;
    }

    get passport(): PassportCast {
        return passportFormat;
    }

    get port(): PortCast {
        return portFormat;
    }

    get regExp(): RegExpCast {
        return regExpFormat;
    }

    get rgbColor(): RgbColorCast {
        return rgbColorFormat;
    }

    get semVer(): SemVerCast {
        return semVerFormat;
    }

    get semver(): SemVerCast {
        return semVerFormat;
    }

    get stripLow(): StripLowCast {
        return stripLowFormat;
    }

    get time(): TimeCast {
        return timeFormat;
    }

    get unescape(): UnescapeCast {
        return unescapeFormat;
    }

    get unicodeSafe(): StripLowCast {
        return stripLowFormat;
    }

    get upper(): UpperCast {
        return upperFormat;
    }

    get upperCase(): UpperCast {
        return upperFormat;
    }

    get url(): UrlCast {
        return urlFormat;
    }

    // endregion getters
}
export const typeFormat = new TypeFormat();
AbstractFormat.base = typeFormat;