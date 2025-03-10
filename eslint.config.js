import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true
        },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
    },
    rules: {
      "indent": ["error", 2], // Mengatur indentasi kode agar konsisten (misalnya, 2 atau 4 spasi).
      "semi": ["error", "always"], // Memastikan penggunaan titik koma (;) di akhir setiap statement.
      "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }], // Gunakan tanda kutip double ("), tapi harus konsisten.
      "eqeqeq": ["error", "always"], // Wajib menggunakan === dibanding == untuk mencegah perbandingan yang tidak terduga.
      "curly": ["error", "multi-line"], // Memastikan bahwa semua blok kode dalam if, for, atau while menggunakan {}.
      "no-console": ["error", { "allow": ["warn", "error", "info"] }], // Mencegah penggunaan console.log() di production.
      "no-debugger": ["error"], // Mencegah penggunaan debugger di production.
      "no-unused-vars": ["error"], // Mencegah variabel yang tidak digunakan dalam kode.
      "unused-imports/no-unused-imports": ["error"], // Mencegah import yang tidak dipakai di dalam file.
      "react/jsx-uses-vars": ["error"], // Pastikan semua variabel yang digunakan dalam JSX telah dideklarasikan.
      "react/no-direct-mutation-state": ["error"], // Mencegah mutasi langsung state dalam class component.
      "react-hooks/rules-of-hooks": ["error"], // Memastikan bahwa Hooks hanya dipanggil di dalam function component atau custom hooks.
      "react-hooks/exhaustive-deps": ["error"], // Memastikan bahwa semua dependencies yang dibutuhkan ada dalam array useEffect.
    },
  },
];
