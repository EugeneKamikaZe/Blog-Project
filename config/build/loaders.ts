import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/cssLoader';
import { buildSvgLoader } from './loaders/svgLoader';

export function loaders({ isDev }: BuildOptions): RuleSetRule[] {
    const tsLoader = {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    };

    const cssLoader = buildCssLoader(isDev);

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
    };

    const svgLoader = buildSvgLoader();

    return [
        babelLoader,
        tsLoader,
        cssLoader,
        imageLoader,
        svgLoader,
    ];
}
