import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
//import {fetch} from 'cross-fetch'

import triggerJobs from './reducer'
//import fetchTriggers from './fetchTriggers'

const loggerMiddleware = createLogger()

const store = createStore(triggerJobs,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
))

//store
    //.dispatch(fetchTriggers('http://localhost:8080/trigger/list'))
//.then(() => console.log(store.getState()))

export default store
