import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type MongoIdAlias = string;
export type MongoIdOpt = TypeOpt;
export type MongoIdCast = ScalarItemCast<MongoIdAlias, MongoIdOpt>;
