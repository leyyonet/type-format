import {isIP, isIPv4, isIPv6} from "net";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {IpAlias, IpOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = IpAlias;
type _O = IpOpt;
@Fqn(...FQN_NAME)
@AssignCast('Ip', 'IpAddress')
export class IpType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'ip';
    protected _is(text: string, opt?: _O): boolean {
        switch (opt?.version) {
            case "4":
            case 4:
                return isIPv4(text);
            case "6":
            case 6:
                return isIPv6(text);
        }
        return isIP(text) >= 4;
    }
}