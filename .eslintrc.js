module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react-hooks", "import"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    //project: "./tsconfig.json",
  },
  rules: {
    // -------------------------------Common Rules---------------------------------//
    "import/no-relative-parent-imports": "error",
    "no-unused-vars": "off",
    "no-empty-function": "off",
    "no-empty": "error",
    "no-debugger": "error",
    "no-console": "warn",
    "getter-return": "error",
    "no-template-curly-in-string": "error",
    "prefer-template": "error",
    curly: "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "prefer-const": "error",
    "default-case-last": "error",
    "@typescript-eslint/explicit-member-accessibility": "off", // отключаем во всех файлах и включаем только в ts tsx
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/sort-comp": [
      1,
      {
        order: [
          "static-variables",
          "static-methods",
          "instance-variables",
          "lifecycle",
          "instance-variables",
          "selectors",
          "everything-else",
          "rendering",
        ],
        groups: {
          lifecycle: [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
          rendering: ["/^render.+$/", "render"],
        },
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        // -------------------------------TS Rules---------------------------------//

        // "@typescript-eslint/no-unsafe-member-access": "error",
        // "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "explicit",
            overrides: {
              accessors: "explicit",
              constructors: "no-public",
              methods: "explicit",
              properties: "explicit",
              parameterProperties: "explicit",
            },
          },
        ],

        "@typescript-eslint/no-empty-interface": [
          0,
          {
            allowSingleExtends: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
          0,
          {
            allowedNames: ["render", "componentDidMount", "componentDidUpdate"],
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          1,
          { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-inferrable-types": "off",

        // -------------------------------React Rules---------------------------------//
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/prefer-stateless-function": [0, { ignorePureComponents: false }], // подсказывает какой класс можно переписать на функцию
        "react/jsx-uses-vars": "warn",
        "react/jsx-no-bind": "warn",
        "react/jsx-boolean-value": [2, "always"],
        "react/jsx-key": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/no-unused-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/self-closing-comp": "error",
        "react/style-prop-object": "error",
        "react/static-property-placement": "error",
        "react/jsx-handler-names": [
          1,
          {
            checkLocalVariables: false, // позже можно будет включить
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
