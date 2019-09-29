export default {
  template: {
    path: "react/create",
    files: [
      "public/favicon.ico.ejs",
      "public/index.html.ejs",
      "src/assets/images/neutron-logo.svg.ejs",
      "src/components/Hello/index.js.ejs",
      "src/components/Hello/styles.js.ejs",
      "src/pages/Home/index.js.ejs",
      "src/pages/Home/styles.js.ejs",
      "src/routes/history.js.ejs",
      "src/routes/index.js.ejs",
      "src/services/api.js.ejs",
      "src/store/index.js.ejs",
      "src/store/ducks/index.js.ejs",
      "src/store/sagas/index.js.ejs",
      "src/styles/colors.js.ejs",
      "src/styles/global.js.ejs",
      "src/utils/notification.js.ejs",
      "src/utils/storage.js.ejs",
      "src/App.js.ejs",
      "src/index.js.ejs",
      ".editorconfig.ejs",
      ".eslintrc.json.ejs",
      ".gitignore.ejs",
      "commitlint.config.js.ejs",
      "dockerfile.ejs",
      "package.json.ejs",
      "LICENSE.ejs",
      "README.md.ejs"
    ]
  },
  requirements: [],
  install: {
    dependencies: [
      "axios",
      "connected-react-router",
      "history",
      "lodash",
      "prop-types",
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "react-scripts",
      "react-toastify",
      "redux",
      "redux-saga",
      "redux-thunk",
      "reduxsauce",
      "seamless-immutable",
      "styled-components"
    ],
    devDependencies: [
      "@commitlint/cli",
      "@commitlint/config-conventional",
      "eslint",
      "eslint-config-airbnb",
      "eslint-plugin-import",
      "eslint-plugin-jsx-a11y",
      "eslint-plugin-react",
      "eslint-plugin-react-hooks",
      "husky"
    ]
  }
};
