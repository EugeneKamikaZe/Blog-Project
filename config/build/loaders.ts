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

    const imageLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
    }

    return [
        tsLoader,
        cssLoader,
        imageLoader,
    ]
}
