import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {FqdnAlias, FqdnOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = FqdnAlias;
type _O = FqdnOpt;
@Fqn(...FQN_NAME)
@AssignCast('Fqdn', 'Domain')
export class FqdnType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'Fqdn';
    protected readonly _FIELDS: Array<string> = ['requireTld', 'allowUnderscores', 'allowTrailingDot',
        'allowNumericTld', 'allowWildcard'];


    protected _is(text: string, opt?: _O): boolean {
        return V.isFQDN(text, this._propertySnake<V.IsFQDNOptions>(opt, this._FIELDS));
    }
}