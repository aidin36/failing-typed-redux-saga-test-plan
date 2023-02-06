This repo is a sample code to reproduce the issue with `typed-redux-saga` and `redux-saga-test-plan` working together.

To run it:

```
$ npm install
$ npm run test
```

If in `sagas.ts` file you import from `redux-saga` instead of `typed-redux-saga/macro`, and replace the `yield*` with `yield`, the error will go away.
