import {ResolveOptions} from "webpack";

export function resolves(): ResolveOptions {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.svg']
    }
}
