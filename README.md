<!---
 git log --oneline --decorate --pretty="format:- %s [(%h)](https://github.com/hemanth-kumarv/jeera-frontend/commit/%H)"
--->

<!-- ## Version List

- [2W52Y2021](#2W52Y2021)
- [1W52Y2021](#1W52Y2021)
- [1W51Y2021](#1W51Y2021)
-->

<!--
## <div id="1W17Y2022">[1W17Y2022] - 18/04/22</div>
### Added
### Changed
### Fixed
-->

<h1 align="center">Jeera Frontend</h1>

<br />

Mock application (Frontend) of Jira for Issue Tracking in Agile Project Management. Hosted at https://jeera-f3859.web.app

Create React App made with [cra-template-complete-web-app](https://www.npmjs.com/package/cra-template-complete-web-app)

<br />

# 🚀 Available Scripts

In the project directory, you can run:

<br />

## ⚡️ start

```
npm start
```

or

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />

## 🧪 test

```
npm test
```

or

```
yarn test
```

Launches the test runner in the interactive watch mode.

<br />

## 🦾 build & deploy

```
npm build
```

or

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

```
npx firebase deploy --only hosting
```

After creating a build, deploy to firebase with above command. Instructions for setup followed from the [Official Firebase Docs](https://firebase.google.com/docs/hosting/quickstart)

<br />

## 🧶 lint

```
npm lint
```

or

```
yarn lint
```

Creates a `.eslintcache` file in which ESLint cache is stored. Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

<br />

## 🎯 format

```
npm format
```

or

```
yarn format
```

Checks if your files are formatted. This command will output a human-friendly message and a list of unformatted files, if any.

<br />

# 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── components          # smallest reusable components
    │   ├── layouts             # combination of components
    │   ├── pages               # single screen, combination of components/layouts
    │   ├── resources           # images, constants and other static resources
    │   ├── store               # Redux store
    │   │   ├── actions         # store's actions
    │   │   └── reducers        # store's reducers
    │   ├── App.jsx
    │   ├── index.jsx
    │   ├── RootComponent.jsx   # React component with all the routes
    │   ├── serviceWorker.js
    │   └── setupTests.js
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
```

# 📖 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#

<p align="center">Bootstrapped with Create React App.</p>
