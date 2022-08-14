import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {DeveloperException, leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {floatType, ScalarRangeOpt} from "@leyyo/scalar";
import {FQN_NAME} from "../../internal-component";
import {DecimalAlias, DecimalOpt} from "./index-types";
import {AbstractFormat} from "../../abstract";

type _T = DecimalAlias;
type _O = DecimalOpt;
@Fqn(...FQN_NAME)
@AssignCast('Decimal')
class DecimalFormat extends AbstractFormat<_T, _O> {
    protected _KEYS = ['forceDecimal','decimalDigits','locale'];
    @memoize({})
    is(value: unknown, opt?: _O): boolean {
        if (leyyo.is.empty(value)) {return false;}
        if (!leyyo.is.object(opt)) {
            opt = {} as _O;
        }
        const num = leyyo.primitive.float(value, {...opt, silent: true});
        if (num === null) { return false;}
        if (!leyyo.is.object(opt.digits)) {
            opt.digits = {} as ScalarRangeOpt;
        }
        const decimal = num - Math.floor(num);
        const size = decimal.toString(10).length - 2;
        if (leyyo.is.integer(opt.digits.min) && opt.digits.min > 0 && size < opt.digits.min) {
            return false;
        }
        return !(leyyo.is.integer(opt.digits.max) && opt.digits.max > 0 && size > opt.digits.max);
    }
    @memoize({})
    cast(value: unknown, opt?: _O): _T {
        if (!leyyo.is.object(opt)) {
            opt = {} as _O;
        }
        let num = leyyo.primitive.float(value, opt);
        if (num !== null) {
            if (!leyyo.is.object(opt.digits)) {
                opt.digits = {} as ScalarRangeOpt;
            }
            let size = (num - Math.floor(num)).toString(10).length - 2;
            if (leyyo.is.integer(opt.digits.min) && opt.digits.min > 0 && size < opt.digits.min) {
                new DeveloperException('scalar.invalid-digit', {field: opt?.field}).with(this).raise(!opt?.silent);
            }
            size = (num - Math.floor(num)).toString(10).length - 2;
            if (leyyo.is.integer(opt.digits.max) && opt.digits.max > 0 && size > opt.digits.max) {
                if (opt?.silent) {
                    // crop decimals
                    num = parseFloat(num.toFixed(opt.digits.max));
                } else {
                    throw new DeveloperException('scalar.invalid-digit', {field: opt?.field}).with(this);
                }
            }
        }
        return floatType.ly_validate(num, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return floatType.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
export const decimalFormat = new DecimalFormat();