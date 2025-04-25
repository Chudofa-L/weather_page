import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";
import eslintRecommended from "eslint-plugin-prettier/recommended";


export default defineConfig([
  eslintRecommended,
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    rules: {
      "prefer-const": "error",
      "no-unused-vars": "error",
      "semi": "error",
      "import/prefer-default-export": "off",
      "import/extensions": "off"
    },
  },
  {
    files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  },
  {
    ignores: ['eslint.config.mjs', 'webpack.config.js', 'babel.config.js', 'jest.config.js']
  },
]);