import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {DataUriAlias, DataUriOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = DataUriAlias;
type _O = DataUriOpt;
@Fqn(...FQN_NAME)
@AssignCast('DataUri')
export class DataUriType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'DataUri';
    protected _is(text: string, opt?: _O): boolean {
        return V.isDataURI(text);
    }
}