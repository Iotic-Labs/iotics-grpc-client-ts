module.exports = {
    root: true,
    extends: './.eslintrc.base.js',
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json', './examples/tsconfig.json'],
        ecmaVersion: 2022,
        sourceType: 'module',
    },
};
