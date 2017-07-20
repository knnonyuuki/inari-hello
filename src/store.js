import { createStore } from 'redux';
import rootReducer from './reducers/indexs'
let store = createStore(rootReducer)
export default store