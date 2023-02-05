import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function loaders({isDev}: BuildOptions): RuleSetRule[] {
    const tsLoader = {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    }
                }
            },
            'sass-loader'
        ]
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        }
                    ]
                ]
            }
        }
    }

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
    }

    const svgLoader = {
        test: /\.svg$/,
        use: '@svgr/webpack'
    }

    return [
        babelLoader,
        tsLoader,
        cssLoader,
        imageLoader,
        svgLoader,
    ]
}
