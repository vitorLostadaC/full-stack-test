/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["react-app", "react-app/jest", "plugin:react-hooks/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-expressions": ["off"]
  }
}
