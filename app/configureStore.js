import { createStore, applyMiddleware } from 'redux'
import contentState from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(contentState, applyMiddleware(thunk))
  return store
}