import {ScalarItemCast, StringOpt} from "@leyyo/scalar";

export type IsrcAlias = string;
export interface IsrcOpt extends StringOpt {
    useHyphens?: boolean;
}
export type IsrcCast = ScalarItemCast<IsrcAlias, IsrcOpt>;
