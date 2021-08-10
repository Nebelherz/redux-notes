import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { filterReducer   } from "./filterReducer";
import { modalReducer } from './modalReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {noteReducer} from './noteReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
  modal: modalReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

