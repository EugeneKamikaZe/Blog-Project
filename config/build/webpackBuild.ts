import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { resolves } from './resolves';
import { loaders } from './loaders';
import { plugins } from './plugins';
import { devServer } from './devServer';

export function webpackBuild(options: BuildOptions): Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        resolve: resolves(options),
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: loaders(options),
        },
        plugins: plugins(options),
        devtool: isDev ? 'eval-source-map' : undefined,
        devServer: isDev ? devServer(options) : undefined,
    };
}
