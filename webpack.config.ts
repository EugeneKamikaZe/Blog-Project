import webpack from 'webpack';
import path from "path";
import {webpackBuild} from "./config/build/webpackBuild";
import {BuildEnv, BuildPath} from "./config/build/types/config";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const port = env.port || 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = webpackBuild({
        mode,
        paths,
        port,
        isDev
    })

    return config
}

