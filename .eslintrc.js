module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "@typescript-eslint/tslint", "prefer-arrow"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/naming-convention": ["error",
      {
	selector: "default",
	format: ["camelCase"],
	leadingUnderscore: "allow",
	trailingUnderscore: "allow",
      },
      {
	selector: "variable",
	format: ["camelCase", "UPPER_CASE"],
	leadingUnderscore: "allow",
	trailingUnderscore: "allow",
      },
      {
	selector: "enumMember",
	format: ["PascalCase"],
      },
      {
	selector: "typeLike",
	format: ["PascalCase"],
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/tslint/config": [
      "error",
      {
        rules: {
          "jsdoc-format": true,
          "no-reference-import": true
        }
      }
    ],
    camelcase: "error",
    complexity: "off",
    "constructor-super": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "max-classes-per-file": ["error", 1],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    radix: "error",
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
  }
};