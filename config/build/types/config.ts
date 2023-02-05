import { Configuration } from 'webpack';

export interface BuildPath {
    entry: string,
    build: string,
    html: string,
    src: string,
}

export interface BuildEnv {
    mode: Configuration['mode'],
    port: number
}

export interface BuildOptions {
    mode: Configuration['mode'],
    paths: BuildPath,
    port: number,
    isDev: boolean,
}
