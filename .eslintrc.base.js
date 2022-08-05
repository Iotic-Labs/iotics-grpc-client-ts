module.exports = {
    ignorePatterns: ['.eslintrc.js'],
    extends: ['airbnb-typescript', 'prettier', 'eslint:recommended'],
    plugins: ['prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': ['off'],
        'import/extensions': ['off'],
        '@typescript-eslint/no-shadow': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
        ],
        quotes: ['error', 'single', { avoidEscape: true }],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        // see https://github.com/typescript-eslint/typescript-eslint/issues/2528
        'no-undef': 'off',
        // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
        'no-return-await': 'off',
        // TODO: enable this rule (use 'error') and fix the code in googleUtils.ts
        '@typescript-eslint/return-await': 'off',
    },
};
