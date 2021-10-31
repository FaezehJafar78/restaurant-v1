module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-base',
    ],
    plugins: [
        'react',
        'react-hooks',
        'eslint-plugin-simple-import-sort',
        'no-async-without-await',
    ],
    rules: {
        'no-async-without-await/no-async-without-await': 'warn',
        'import/prefer-default-export': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        'no-undefined': 'warn',
        'react/jsx-filename-extension': 0,
        indent: 0,
        'global-require': 0,
        'linebreak-style': 0,
        'arrow-body-style': 0,
        semi: [
            'error',
            'always',
        ],
        quotes: [
            'error',
            'single',
        ],

    },
};
