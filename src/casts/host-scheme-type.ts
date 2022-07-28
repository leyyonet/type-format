import {DeveloperException, leyyo} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {HostSchemeAlias, HostSchemeCast, HostSchemeOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = HostSchemeAlias;
type _O = HostSchemeOpt;
@Fqn(...FQN_NAME)
@AssignCast('HostScheme')
export class HostSchemeType extends AbstractStringType<_T, _O> implements HostSchemeCast {
    protected readonly _name: string = 'ip';
    protected _is(text: string, opt?: _O): boolean {
        const [scheme, host] = text.split('://');
        if (!scheme) {
            new DeveloperException('unknown.scheme').with(this).raise(!opt?.silent);
            return false;
        }
        if (!host) {
            new DeveloperException('unknown.host').with(this).raise(!opt?.silent);
            return false;
        }
        if (leyyo.is.array(opt?.schemes, true) && !opt?.schemes.includes(scheme)) {
            new DeveloperException('unknown.scheme').with(this).raise(!opt?.silent);
            return false;
        }
        return this._typeFormat.host.is(host, opt);
    }
}