import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function devServer(option: BuildOptions): DevServerConfiguration {
    return {
        port: option.port,
        hot: true,
        open: true,
        historyApiFallback: true,
    }
}
