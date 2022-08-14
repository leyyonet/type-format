import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {FqdnAlias, FqdnOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = FqdnAlias;
type _O = FqdnOpt;
@Fqn(...FQN_NAME)
@AssignCast('Fqdn', 'Domain')
class FqdnFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'Fqdn';
    protected static readonly _FIELDS: Array<string> = [
        'requireTld',
        'allowUnderscores',
        'allowTrailingDot',
        'allowNumericTld',
        'allowWildcard'
    ];

    protected _is(text: string, opt?: _O): boolean {
        return V.isFQDN(text, this._propertySnake<V.IsFQDNOptions>(opt, FqdnFormat._FIELDS));
    }
}
export const fqdnFormat = new FqdnFormat();
export const domainFormat = fqdnFormat;