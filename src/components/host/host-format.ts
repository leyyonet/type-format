import {DeveloperException, leyyo} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {HostAlias, HostCast, HostOpt} from "./index-types";
import {AbstractFormat, AbstractStringFormat} from "../../abstract";
import {PortOpt} from "../port";

type _T = HostAlias;
type _O = HostOpt;
@Fqn(...FQN_NAME)
@AssignCast('Host')
class HostFormat extends AbstractStringFormat<_T, _O> implements HostCast {
    protected readonly _name: string = 'ip';
    protected _is(text: string, opt?: _O): boolean {
        if (text.includes(':')) {
            const [host, port] = text.split(':');
            if (/^\d+$/.test(port) &&
                leyyo.is.array(opt?.ports, true) &&
                !opt?.ports.includes(leyyo.primitive.integer(port, opt))) {
                new DeveloperException('unknown.port', {port}).with(this).raise(!opt?.silent);
                return false;
            }
            return ((host === 'localhost') ||
                    AbstractFormat.base.fqdn.is(host, opt) ||
                    AbstractFormat.base.ip.is(host, opt)) &&
                    AbstractFormat.base.port.is(port, opt as unknown as PortOpt);
        }
        return (text === 'localhost') ||
            AbstractFormat.base.fqdn.is(text, opt) ||
            AbstractFormat.base.ip.is(text, opt);
    }
}
export const hostFormat = new HostFormat();