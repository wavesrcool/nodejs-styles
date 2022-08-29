module.exports = {
    extends: [
     'airbnb-base',
     'airbnb-typescript/base',
     'plugin:@typescript-eslint/recommended',
     'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    "parserOptions": {
      "project": './tsconfig.json'
    },
    "rules": {
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "no-console": "off",
      "no-nested-ternary": "off",
      "no-useless-return": "off",
      "no-bitwise": ["error", { "allow": ["~"] }],
      "import/extensions": ["error", "never", { "json": "always" }],
      "import/no-unresolved": 0,
      "prettier/prettier": ["error"],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-unused-vars": 2,
      "unused-imports/no-unused-imports": "error",
      "no-param-reassign": [
        "error",
        { "props": true, "ignorePropertyModificationsFor": ["state"] }
      ]
    }
}