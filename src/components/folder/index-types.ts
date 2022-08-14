import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";

export type FolderAlias = string;
export interface FolderOpt extends TypeOpt {
    canBeAbsolute?: boolean;
    isLinux?: boolean;
    restricted?: boolean;
}
export interface FolderCast extends ScalarItemCast<FolderAlias, FolderOpt> {
    defCanBeAbsolute(value: boolean): FolderCast;
    defIsLinux(value: boolean): FolderCast;
    defRestricted(value: boolean): FolderCast;
}
