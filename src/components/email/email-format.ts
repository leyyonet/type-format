import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../../internal-component";
import {EmailAlias, EmailOpt} from "./index-types";
import {AbstractStringFormat} from "../../abstract";

type _T = EmailAlias;
type _O = EmailOpt;
@Fqn(...FQN_NAME)
@AssignCast('Email', 'EmailAddress')
class EmailFormat extends AbstractStringFormat<_T, _O> {
    protected readonly _name: string = 'issn';
    protected static readonly _FIELDS: Array<string> = [
        'allowDisplayName',
        'requireDisplayName',
        'allowUtf8LocalPart',
        'requireTld',
        'ignoreMaxLength',
        'allowIpDomain',
        'domainSpecificValidation',
        'hostBlacklist'
    ];

    protected _is(text: string, opt?: _O): boolean {
        return V.isEmail(text, this._propertySnake<V.IsEmailOptions>(opt, EmailFormat._FIELDS));
    }
}
export const emailFormat = new EmailFormat();
export const emailAddressFormat = emailFormat;