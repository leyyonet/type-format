import {FuncLike} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {NanoIdAlias, NanoIdCast, NanoIdOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";
import {customAlphabet, nanoid} from "nanoid";
import {nanoid as nonSecureId} from "nanoid/non-secure";

type _T = NanoIdAlias;
type _O = NanoIdOpt;
@Fqn(...FQN_NAME)
@AssignCast('NanoId')
export class NanoIdType extends AbstractStringType<_T, _O> implements NanoIdCast {
    protected readonly _name: string = 'nanoId';

    protected _is(text: string, opt?: _O): boolean {
        return !!text;
    }
    generate(opt?: _O): _T {
        let fn: FuncLike;
        if (typeof opt?.alphabet === 'string') {
            fn = customAlphabet(opt.alphabet, opt.defaultSize ?? 10);
        } else {
            fn = opt.nonSecure ? nonSecureId : nanoid;
        }
        return fn(opt.length);
    }
}