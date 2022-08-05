module.exports = {
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '.yarnrc.yml',
            options: {
                singleQuote: false,
                tabWidth: 2,
            },
        },
    ],
};
