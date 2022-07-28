import V from "validator";
import {leyyo} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {AssignCast} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {StripLowAlias, StripLowOpt} from "../index-types";
import {AbstractStringType} from "../abstract-string-type";

// @todo
type _T = StripLowAlias;
type _O = StripLowOpt;
@Fqn(...FQN_NAME)
@AssignCast('StripLow')
export class StripLowType extends AbstractStringType<_T, _O> {
    protected readonly _name: string = 'StripLow';
    protected _is(text: string, opt?: _O): boolean {
        return !!V.stripLow(text, opt?.keepNewLines);
    }

    protected _cast(value: unknown, opt?: _O): _T {
        const text = leyyo.primitive.text(value, opt);
        return text ? V.stripLow(text, opt.keepNewLines) : null;
    }
}