import memoize from 'memoizee-decorator';
import V from "validator";
import {leyyo, RecLike} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {NormalizedEmailAlias, NormalizedEmailCast, NormalizedEmailOpt} from "./index-types";
import {AbstractFormat} from "../../abstract";
import {stringType, textType} from "@leyyo/scalar";

// @todo
type _T = NormalizedEmailAlias;
type _O = NormalizedEmailOpt;
@Fqn(...FQN_NAME)
@AssignCast('NormalizedEmail')
class NormalizedEmailFormat extends  AbstractFormat<_T, _O> implements NormalizedEmailCast {
    protected _removeDotDomains: Array<string> = [];
    protected _removeSubAddressDomains: Array<string> = [];
    protected _convertAliasDomains: Array<string> = [];

    optRemoveDotDomains(domains: Array<string>): NormalizedEmailCast {
        this._removeDotDomains = textType.castArrayOf(domains, {ignoreNullValues: true}) ?? [];
        return this;
    }
    optRemoveSubAddressDomains(domains: Array<string>): NormalizedEmailCast {
        this._removeSubAddressDomains = textType.castArrayOf(domains, {ignoreNullValues: true}) ?? [];
        return this;
    }
    optConvertAliasDomains(domains: Array<string>): NormalizedEmailCast {
        this._convertAliasDomains = textType.castArrayOf(domains, {ignoreNullValues: true}) ?? [];
        return this;
    }
    protected _opt(opt?: _O): _O {
        opt = leyyo.primitive.object(opt) ?? {};
        if (!opt['$casted']) {
            opt['$casted'] = true;
            if (opt.lowercase !== false) {
                ['all', 'gmail', 'outlookdotcom', 'yahoo', 'icloud'].forEach(part => {
                    opt[`${part}_lowercase`] = true;
                });
            }
            if (opt.removeDots !== false) {
                ['gmail'].forEach(part => {
                    opt[`${part}_remove_dots`] = true;
                });
            }
            if (opt.removeSubAddress !== false) {
                ['gmail', 'outlookdotcom', 'yahoo', 'icloud'].forEach(part => {
                    opt[`${part}_remove_subaddress`] = true;
                });
            }
            if (opt.convertAliasDomains !== false) {
                opt['gmail_convert_googlemaildotcom'] = true;
            }
        }
        return opt;
    }
    @memoize({})
    is(value: unknown, opt?: _O): boolean {
        opt = this._opt(opt);
        return AbstractFormat.base.email.is(value, opt) && !!V.normalizeEmail(value as string, opt as V.NormalizeEmailOptions);
    }
    @memoize({})
    cast(value: unknown, opt?: _O): _T {
        opt = this._opt(opt);
        let text = leyyo.primitive.text(value, opt);
        if (!text) {
            return null;
        }
        text = V.normalizeEmail(text, opt as V.NormalizeEmailOptions) as string;
        return stringType.ly_validate(text, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return stringType.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
export const normalizedEmailFormat = new NormalizedEmailFormat();