let withProgressBar;
const path = require('path');

try {
    withProgressBar = require('next-progressbar');
} catch (e) {
    withProgressBar = (o) => o;
}

module.exports = withProgressBar({
    experimental: {
        modern: true
    },
    publicRuntimeConfig: {
        cryptoApiKey: process.env.API_KEY || 'MISSING_KEY'
    },
    webpack(webpackConfig) {
        const config = webpackConfig;
        config.devtool = 'source-map';
        config.resolve.alias['@'] = path.resolve(__dirname, './');
        config.resolve.alias.UI = path.resolve(__dirname, './components/UI');
        config.module.rules.push({
            test: /\.(png|eot|otf|ttf|woff|woff2|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                    name: '[name].[ext]'
                }
            }
        });
        return config;
    }
});
