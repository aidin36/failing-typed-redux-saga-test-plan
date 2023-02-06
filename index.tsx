import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { rootSaga } from './sagas'

export const mainReducer = (state = 0, action) => {
  return state
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <div>Hello world!</div>
  </Provider>
)

// ReactDOM.render(<App />, document.getElementById('root'))

document.addEventListener('load', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
