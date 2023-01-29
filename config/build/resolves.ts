import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function resolves(option: BuildOptions): ResolveOptions {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.svg'],
        preferAbsolute: true,
        modules: [option.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
