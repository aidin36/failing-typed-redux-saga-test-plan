import { takeLatest, all } from 'typed-redux-saga/macro'
import { NO_OP, NoOpAction } from './actions'

export function* noOpHandler(action: NoOpAction) {
  console.log('NO_OP is handled')
}

export function* rootSaga() {
  yield* all([takeLatest(NO_OP, noOpHandler)])
}
