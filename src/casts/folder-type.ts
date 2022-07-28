import {Fqn} from "@leyyo/fqn";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {FQN_NAME} from "../internal-component";
import {FolderAlias, FolderCast, FolderOpt} from "../index-types";
import {AbstractFormat} from "../abstract-format";
import path from "path";

type _T = FolderAlias;
type _O = FolderOpt;
// noinspection JSUnusedLocalSymbols
@Fqn(...FQN_NAME)
@AssignCast('Folder')
export class FolderType extends AbstractFormat<_T, _O> implements FolderCast {
    protected _defCanBeAbsolute = true;
    protected _defIsLinux = true;
    protected _defRestricted = false;

    defCanBeAbsolute(value: boolean): FolderCast {
        this._defCanBeAbsolute = leyyo.primitive.boolean(value) ?? false;
        return this;
    }

    defIsLinux(value: boolean): FolderCast {
        this._defIsLinux = leyyo.primitive.boolean(value) ?? false;
        return this;
    }

    defRestricted(value: boolean): FolderCast {
        this._defRestricted = leyyo.primitive.boolean(value) ?? false;
        return this;
    }
    protected _dirSeparator(isLinux: boolean): string {
        return isLinux ? '/' : '\\';
    }
    protected _resolver(isLinux: boolean): string {
        return isLinux ? 'posix' : 'win32';
    }
    protected _absolutePattern(isLinux: boolean): RegExp {
        return isLinux ? /^\// : /^[a-zA-Z]:\\/;
    }
    protected _numberOfColons(text: string): number {
        return (text.match(/:/g) ?? []).length;
    }

    protected _trimPath(text: string, isLinux: boolean): string {
        const parsed = path.parse(text);
        const hasTrailingSlash = text.charAt(text.length - 1) === this._dirSeparator(isLinux);
        const endIndex = hasTrailingSlash ? text.length - 1 : text.length;
        // trim leading root and trailing slash
        return text.substring(parsed.root.length, endIndex);
    }

    protected _isNotAbsolute(str: string, isLinux: boolean, canBeAbsolute: boolean): boolean {
        if (!canBeAbsolute) { return true;}
        const resolved = this._trimPath(path[this._resolver(isLinux)].resolve(str), isLinux);
        const original = this._trimPath(str, isLinux);
        if (resolved !== original) {
            return false;
        }
        return this._absolutePattern(isLinux).test(str);
    }

    protected _isNotRestricted(str: string, isLinux: boolean): boolean {
        return isLinux ? !/[\\:]/.test(str) : !/[\/]/.test(str) && this._numberOfColons(str) === 1;
    }

    protected isFolder(str: unknown, isLinux = true, canBeAbsolute = true): boolean {
        if (leyyo.is.empty(str)) {return false;}
        return this._isNotAbsolute(str as string, isLinux, canBeAbsolute) && this._isNotRestricted(str as string, isLinux);
    }

    is(value: unknown, opt?: _O): boolean {
        if (leyyo.is.empty(value)) {return false;}
        return this._isNotAbsolute(value as string, opt.isLinux, opt.canBeAbsolute) && (!!opt.restricted || this._isNotRestricted(value as string, opt.isLinux));
    }

    cast(value: unknown, opt?: _O): _T {
        const text = leyyo.primitive.text(value);
        if (text) {
            if (!this._isNotAbsolute(value as string, opt.isLinux, opt.canBeAbsolute)) {
                throw new Error('Absolute');
            }
            if (opt.restricted && this._isNotRestricted(value as string, opt.isLinux)) {
                throw new Error('Restricted');
            }
        }
        return this._scalar.string.ly_validate(text, opt);
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: _O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}