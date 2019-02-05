import { createStore , applyMiddleware,compose} from 'redux'
import * as thunk from 'redux-thunk';
import rootReducer from './reducers';



const InitialState = {};



const store = createStore(rootReducer, InitialState, applyMiddleware(thunk.default));


export default store;