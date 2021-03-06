module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: "never"
  }
}
