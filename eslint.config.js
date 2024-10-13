import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];