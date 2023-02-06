import { expectSaga } from 'redux-saga-test-plan'
import { rootSaga } from './sagas'
import { mainReducer } from './index'
import { noOpAction } from './actions'

describe('happy path', () => {
  it('should work', () => {
    expectSaga(rootSaga).withReducer(mainReducer).put(noOpAction()).silentRun()
  })
})
