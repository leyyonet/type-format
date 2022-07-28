import {emptyFn, leyyo} from "@leyyo/core";
import {Bind, Fqn} from "@leyyo/fqn";
import {COMPONENT_NAME, FQN_NAME} from "./internal-component";
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
    HexColorCast, HostCast, HostSchemeCast,
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
    TypeFormatLike,
    UnescapeCast,
    UpperCast,
    UrlCast
} from "./index-types";
import {
    AlphanumericFormat,
    AlphaFormat,
    AsciiFormat,
    Base32Type,
    Base58Type,
    Base64Type,
    BicType,
    ByteLengthType,
    ClazzType,
    CreditCardType,
    DataUriType,
    DatetimeType,
    DecimalType,
    DigitType,
    EmailType,
    EscapeType,
    FolderType,
    FqdnType,
    HashType,
    HexadecimalType,
    HexColorType,
    IbanType,
    ImeiType,
    IpType,
    IsoDateType,
    IsrcType,
    IssnType,
    LatLongType,
    LocaleDateType,
    LowerType,
    MacType,
    Md5Type,
    MimeType,
    MongoIdType,
    MultibyteType,
    NanoIdType,
    NormalizedEmailType,
    PassportType,
    PortType,
    RegExpType,
    RgbColorType,
    SemVerType,
    StripLowType,
    TimeType,
    UnescapeType,
    UpperType,
    UrlType, HostFormat, HostSchemeType
} from "./casts";

// noinspection JSUnusedGlobalSymbols
@Fqn(...FQN_NAME)
@Bind()
export class TypeFormat implements TypeFormatLike {
    // region property
    protected readonly _alpha: AlphaCast;
    protected readonly _alphanumeric: AlphanumericCast;
    protected readonly _ascii: AsciiCast;
    protected readonly _base32: Base32Cast;
    protected readonly _base58: Base58Cast;
    protected readonly _base64: Base64Cast;
    protected readonly _bic: BicCast;
    protected readonly _byteLength: ByteLengthCast;
    protected readonly _clazz: ClazzCast;
    protected readonly _creditCard: CreditCardCast;
    protected readonly _dataUri: DataUriCast;
    protected readonly _datetime: DatetimeCast;
    protected readonly _decimal: DecimalCast;
    protected readonly _digit: DigitCast;
    protected readonly _email: EmailCast;
    protected readonly _escape: EscapeCast;
    protected readonly _folder: FolderCast;
    protected readonly _fqdn: FqdnCast;
    protected readonly _hash: HashCast;
    protected readonly _hexColor: HexColorCast;
    protected readonly _hexadecimal: HexadecimalCast;
    protected readonly _hostScheme: HostSchemeCast;
    protected readonly _host: HostCast;
    protected readonly _iban: IbanCast;
    protected readonly _imei: ImeiCast;
    protected readonly _ip: IpCast;
    protected readonly _isoDate: IsoDateCast;
    protected readonly _isrc: IsrcCast;
    protected readonly _issn: IssnCast;
    protected readonly _latLong: LatLongCast;
    protected readonly _localeDate: LocaleDateCast;
    protected readonly _lower: LowerCast;
    protected readonly _mac: MacCast;
    protected readonly _md5: Md5Cast;
    protected readonly _mime: MimeCast;
    protected readonly _mongoId: MongoIdCast;
    protected readonly _multiByte: MultibyteCast;
    protected readonly _nanoId: NanoIdCast;
    protected readonly _normalizedEmail: NormalizedEmailCast;
    protected readonly _passport: PassportCast;
    protected readonly _port: PortCast;
    protected readonly _regExp: RegExpCast;
    protected readonly _rgbColor: RgbColorCast;
    protected readonly _semVer: SemVerCast;
    protected readonly _stripLow: StripLowCast;
    protected readonly _time: TimeCast;
    protected readonly _unescape: UnescapeCast;
    protected readonly _upper: UpperCast;
    protected readonly _url: UrlCast;

    // endregion property
    // region methods
    constructor() {
        leyyo.component.add(COMPONENT_NAME);
        this._alpha = new AlphaFormat(this);
        this._alphanumeric = new AlphanumericFormat(this);
        this._ascii = new AsciiFormat(this);
        this._base32 = new Base32Type(this);
        this._base58 = new Base58Type(this);
        this._base64 = new Base64Type(this);
        this._bic = new BicType(this);
        this._byteLength = new ByteLengthType(this);
        this._clazz = new ClazzType(this);
        this._creditCard = new CreditCardType(this);
        this._dataUri = new DataUriType(this);
        this._datetime = new DatetimeType(this);
        this._decimal = new DecimalType(this);
        this._digit = new DigitType(this);
        this._email = new EmailType(this);
        this._escape = new EscapeType(this);
        this._folder = new FolderType(this);
        this._fqdn = new FqdnType(this);
        this._hash = new HashType(this);
        this._hexColor = new HexColorType(this);
        this._hexadecimal = new HexadecimalType(this);
        this._host = new HostFormat(this);
        this._hostScheme = new HostSchemeType(this);
        this._iban = new IbanType(this);
        this._imei = new ImeiType(this);
        this._ip = new IpType(this);
        this._isoDate = new IsoDateType(this);
        this._isrc = new IsrcType(this);
        this._issn = new IssnType(this);
        this._latLong = new LatLongType(this);
        this._localeDate = new LocaleDateType(this);
        this._lower = new LowerType(this);
        this._mac = new MacType(this);
        this._md5 = new Md5Type(this);
        this._mime = new MimeType(this);
        this._mongoId = new MongoIdType(this);
        this._multiByte = new MultibyteType(this);
        this._nanoId = new NanoIdType(this);
        this._normalizedEmail = new NormalizedEmailType(this);
        this._passport = new PassportType(this);
        this._port = new PortType(this);
        this._regExp = new RegExpType(this);
        this._rgbColor = new RgbColorType(this);
        this._semVer = new SemVerType(this);
        this._stripLow = new StripLowType(this);
        this._time = new TimeType(this);
        this._unescape = new UnescapeType(this);
        this._upper = new UpperType(this);
        this._url = new UrlType(this);
    }

    initialize(): void {
        emptyFn();
    }

    // endregion methods

    // region getters
    get alpha(): AlphaCast {
        return this._alpha;
    }

    get alphaNumeric(): AlphanumericCast {
        return this._alphanumeric;
    }

    get alphanumeric(): AlphanumericCast {
        return this._alphanumeric;
    }

    get ascii(): AsciiCast {
        return this._ascii;
    }

    get base32(): Base32Cast {
        return this._base32;
    }

    get base58(): Base58Cast {
        return this._base58;
    }

    get base64(): Base64Cast {
        return this._base64;
    }

    get bic(): BicCast {
        return this._bic;
    }

    get byteLength(): ByteLengthCast {
        return this._byteLength;
    }

    get clazz(): ClazzCast {
        return this._clazz;
    }

    get creditCard(): CreditCardCast {
        return this._creditCard;
    }

    get dataUri(): DataUriCast {
        return this._dataUri;
    }

    get datetime(): DatetimeCast {
        return this._datetime;
    }

    get decimal(): DecimalCast {
        return this._decimal;
    }

    get digit(): DigitCast {
        return this._digit;
    }

    get domain(): FqdnCast {
        return this._fqdn;
    }

    get email(): EmailCast {
        return this._email;
    }

    get escape(): EscapeCast {
        return this._escape;
    }

    get folder(): FolderCast {
        return this._folder;
    }

    get fqdn(): FqdnCast {
        return this._fqdn;
    }

    get hash(): HashCast {
        return this._hash;
    }

    get hexColor(): HexColorCast {
        return this._hash;
    }

    get hexadecimal(): HexadecimalCast {
        return this._hexadecimal;
    }

    get host(): HostCast {
        return this._host;
    }

    get hostScheme(): HostSchemeCast {
        return this._hostScheme;
    }

    get iban(): IbanCast {
        return this._iban;
    }

    get imei(): ImeiCast {
        return this._imei;
    }

    get ip(): IpCast {
        return this._ip;
    }

    get ipAddress(): IpCast {
        return this._ip;
    }

    get isoDate(): IsoDateCast {
        return this._isoDate;
    }

    get isrc(): IsrcCast {
        return this._isrc;
    }

    get issn(): IssnCast {
        return this._issn;
    }

    get latLong(): LatLongCast {
        return this._latLong;
    }

    get latitudeLongitude(): LatLongCast {
        return this._latLong;
    }

    get localeDate(): LocaleDateCast {
        return this._localeDate;
    }

    get lower(): LowerCast {
        return this._lower;
    }

    get lowerCase(): LowerCast {
        return this._lower;
    }

    get mac(): MacCast {
        return this._mac;
    }

    get macAddress(): MacCast {
        return this._mac;
    }

    get md5(): Md5Cast {
        return this._md5;
    }

    get mime(): MimeCast {
        return this._mime;
    }

    get mongoId(): MongoIdCast {
        return this._mongoId;
    }

    get multiByte(): MultibyteCast {
        return this._multiByte;
    }

    get multibyte(): MultibyteCast {
        return this._multiByte;
    }

    get nanoId(): NanoIdCast {
        return this._nanoId;
    }

    get normalizedEmail(): NormalizedEmailCast {
        return this._normalizedEmail;
    }

    get passport(): PassportCast {
        return this._passport;
    }

    get port(): PortCast {
        return this._port;
    }

    get regExp(): RegExpCast {
        return this._regExp;
    }

    get rgbColor(): RgbColorCast {
        return this._rgbColor;
    }

    get semVer(): SemVerCast {
        return this._semVer;
    }

    get semver(): SemVerCast {
        return this._semVer;
    }

    get stripLow(): StripLowCast {
        return this._stripLow;
    }

    get time(): TimeCast {
        return this._time;
    }

    get unescape(): UnescapeCast {
        return this._unescape;
    }

    get unicodeSafe(): StripLowCast {
        return this._stripLow;
    }

    get upper(): UpperCast {
        return this._upper;
    }

    get upperCase(): UpperCast {
        return this._upper;
    }

    get url(): UrlCast {
        return this._url;
    }

    // endregion getters
}