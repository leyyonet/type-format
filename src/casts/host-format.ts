import {DeveloperException, leyyo} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {HostAlias, HostCast, HostOpt, PortOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = HostAlias;
type _O = HostOpt;
@Fqn(...FQN_NAME)
@AssignCast('Host')
export class HostFormat extends AbstractStringType<_T, _O> implements HostCast {
    protected readonly _name: string = 'ip';
    protected _is(text: string, opt?: _O): boolean {
        if (text.includes(':')) {
            const [host, port] = text.split(':');
            if (/^[0-9]+$/.test(port) &&
                leyyo.is.array(opt?.ports, true) &&
                !opt?.ports.includes(leyyo.primitive.integer(port, opt))) {
                new DeveloperException('unknown.port', {port}).with(this).raise(!opt?.silent);
                return false;
            }
            return ((host === 'localhost') ||
                this._typeFormat.fqdn.is(host, opt) ||
                this._typeFormat.ip.is(host, opt)) &&
                this._typeFormat.port.is(port, opt as unknown as PortOpt);
        }
        return (text === 'localhost') ||
            this._typeFormat.fqdn.is(text, opt) ||
            this._typeFormat.ip.is(text, opt);
    }
}