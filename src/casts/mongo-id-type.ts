import V from "validator";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {MongoIdAlias, MongoIdOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

type _T = MongoIdAlias;
type _O = MongoIdOpt;
@Fqn(...FQN_NAME)
@AssignCast('MongoId')
export class MongoIdType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'mongoId';
    protected _is(text: string, opt?: _O): boolean {
        return V.isMongoId(text);
    }
}