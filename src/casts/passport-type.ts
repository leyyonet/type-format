import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {PassportAlias, PassportOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = PassportAlias;
type _O = PassportOpt;
@Fqn(...FQN_NAME)
@AssignCast('Passport')
export class PassportType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'passport';
    protected _is(text: string, opt?: _O): boolean {
        return V.isPassportNumber(text, opt?.country);
    }
}