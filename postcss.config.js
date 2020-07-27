const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    plugins: {
        ...(dev ? undefined : {
            'cssnano': {
                'preset': [
                    'default',
                    {'discardComments': {'removeAll': true}},
                ],
            },
        }),
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
    },
};
