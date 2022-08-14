import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {PassportAlias, PassportOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = PassportAlias;
type _O = PassportOpt;
@Fqn(...FQN_NAME)
@AssignCast('Passport')
class PassportFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'passport';
    protected _is(text: string, opt?: _O): boolean {
        return V.isPassportNumber(text, opt?.country);
    }
}
export const passportFormat = new PassportFormat();