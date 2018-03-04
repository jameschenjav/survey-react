# Survey React Demo

## Install Dependencies

Install [Yarn](https://yarnpkg.com/en/docs/install) first.

```bash
yarn
```

## Start a HTTP service to fetch JSON test data

```bash
yarn json-test
```

This App dynamically load JSON from HTTP request. You may need to change the IP address in `src/common/loadJsonToStore.js` to one of listed addresses.

## React (Web)

Entry: `src/web/index.js`

```bash
yarn start
```

## React Native

Entry: `App.js`

1. Open a virtual device first.
2. Either execute `yarn ios` or `yarn android`, or open the project vie [Expo XDE](https://github.com/expo/xde) (recommended).
