
import { combineReducers } from 'redux'

import {
  FETCH_TRIGGERS_PENDING, FETCH_TRIGGERS_SUCCESS, FETCH_TRIGGERS_ERROR,
  FETCH_LOGS_PENDING, FETCH_LOGS_SUCCESS, FETCH_LOGS_ERROR,
  FETCH_COMMANDS_PENDING, FETCH_COMMANDS_SUCCESS, FETCH_COMMANDS_ERROR
} from './actions'

const triggerInitialState = {
  pending: false,
  triggers: [
  ],
  error: null
};
const logInitialState = {
  pending: false,
  logs: [
  ],
  error: null
};
const commandInitialState = {
  pending: false,
  commands: [
  ],
  error: null
};

function jobTriggersReducer(state = triggerInitialState, action) {
  switch(action.type) {
    case FETCH_TRIGGERS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_TRIGGERS_SUCCESS:
      //console.log("Reducing returned success")
      //console.log(action.triggers)
      return {
        ...state,
        pending: false,
        triggers: action.triggers
      }
    case FETCH_TRIGGERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
function jobCommandsReducer(state = commandInitialState, action) {
  switch(action.type) {
    case FETCH_COMMANDS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_COMMANDS_SUCCESS:
      //console.log("Reducing returned success")
      //console.log(action.commands)
      return {
        ...state,
        pending: false,
        commands: action.commands
      }
    case FETCH_COMMANDS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
function jobLogsReducer(state = logInitialState, action) {
  switch(action.type) {
    case FETCH_LOGS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_LOGS_SUCCESS:
      //console.log("Reducing returned success")
      //console.log(action.triggers)
      return {
        ...state,
        pending: false,
        logs: action.logs
      }
    case FETCH_LOGS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
const triggerJobs = combineReducers({
    jobTriggers: jobTriggersReducer,
    jobLogs: jobLogsReducer,
    jobCommands: jobCommandsReducer
})

export default triggerJobs
