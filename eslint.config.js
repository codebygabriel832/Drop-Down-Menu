import { defineConfig } from 'eslint/config'
import { airbnb } from "eslint-config-airbnb"
import globals from "globals"


export default defineConfig({
    files: ["src/**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    Plugins: [
        airbnb,
    ],
    extends: ["airbnb"],
})