import js from '@eslint/js';
import globals from 'globals';
import eslintPluginJsonSchemaValidator from 'eslint-plugin-json-schema-validator';

export default [
    js.configs.recommended,
    {
        rules: {
            'indent': 'off', 'no-unexpected-multiline': 'off', // allow whitespace anywhere
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // enforce single quotes except backticks to avoid escaping quotes
            'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // enforce spacing in object properties
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-async-promise-executor': 'off', // allow promise executor functions to be async (to accomodate await lines)
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }] // allow unused named args in catch blocks
        },
        languageOptions: {
            ecmaVersion: 2022, sourceType: 'script',
            globals: {
                ...globals.browser, ...globals.greasemonkey,
                chatgpt: 'readonly', chrome: 'readonly', CryptoJS: 'readonly',
                GM_cookie: 'readonly', syncExtension: 'writable', ipv4: 'readonly'
            }
        }
    },
    { files: ['**/*.mjs', '**/lib/*.js'], languageOptions: { sourceType: 'module' }},
    ...eslintPluginJsonSchemaValidator.configs['flat/recommended']
];
