module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "globals": {
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {"allowTemplateLiterals": true}
    ],
    "semi": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "no-unused-vars": [
      "off"
    ]
  }
};
