import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {UrlAlias, UrlOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = UrlAlias;
type _O = UrlOpt;
@Fqn(...FQN_NAME)
@AssignCast('Url')
class UrlFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'Url';
    protected readonly _FIELDS: Array<string> = ['requireTld', 'requireProtocol', 'requireHost', 'requirePort',
        'requireValidProtocol', 'allowUnderscores', 'hostWhitelist', 'hostBlacklist', 'allowTrailingDot',
        'allowProtocolRelativeUrls', 'disallowAuth', 'allowFragments', 'allowQueryComponents'];

    protected _is(text: string, opt?: _O): boolean {
        return V.isURL(text, this._propertySnake<V.IsURLOptions>(opt, this._FIELDS));
    }
}
export const urlFormat = new UrlFormat();