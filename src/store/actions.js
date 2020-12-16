
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const FETCH_TRIGGERS_PENDING = 'FETCH_TRIGGERS_PENDING'
export function fetchTriggersPending(){
    return {
        type: FETCH_TRIGGERS_PENDING
    }
}

export const FETCH_TRIGGERS_SUCCESS = 'FETCH_TRIGGERS_SUCCESS'
export function fetchTriggersSuccess(triggers) {
    return {
        type: FETCH_TRIGGERS_SUCCESS,
        status: SUCCESS,
        triggers: triggers
    }
}

export const FETCH_TRIGGERS_ERROR = 'FETCH_TRIGGERS_ERROR'
export function fetchTriggersFailure(error) {
    return {
        type: FETCH_TRIGGERS_ERROR,
        status: FAILURE,
        error: error
    }
}

export const FETCH_COMMANDS_PENDING = 'FETCH_COMMANDS_PENDING'
export function fetchCommandsPending(){
    return {
        type: FETCH_COMMANDS_PENDING
    }
}

export const FETCH_COMMANDS_SUCCESS = 'FETCH_COMMANDS_SUCCESS'
export function fetchCommandsSuccess(commands) {
    return {
        type: FETCH_COMMANDS_SUCCESS,
        status: SUCCESS,
        commands: commands
    }
}

export const FETCH_COMMANDS_ERROR = 'FETCH_COMMANDS_ERROR'
export function fetchCommandsFailure(error) {
    return {
        type: FETCH_COMMANDS_ERROR,
        status: FAILURE,
        error: error
    }
}

export const RUN_TRIGGER_PENDING = 'RUN_TRIGGER_PENDING'
export function runTriggersPending(){
    return {
        type: RUN_TRIGGER_PENDING
    }
}

export const RUN_TRIGGER_SUCCESS = 'RUN_TRIGGER_SUCCESS'
export function runTriggersSuccess(triggers) {
    return {
        type: RUN_TRIGGER_SUCCESS,
        status: SUCCESS,
        triggers: triggers
    }
}

export const RUN_TRIGGER_ERROR = 'RUN_TRIGGER_ERROR'
export function runTriggersFailure(error) {
    return {
        type: RUN_TRIGGER_ERROR,
        status: FAILURE,
        error: error
    }
}

export const FETCH_LOGS_PENDING = 'FETCH_LOGS_PENDING'
export function fetchLogsPending(){
    return {
        type: FETCH_LOGS_PENDING
    }
}

export const FETCH_LOGS_SUCCESS = 'FETCH_LOGS_SUCCESS'
export function fetchLogsSuccess(logs) {
    return {
        type: FETCH_LOGS_SUCCESS,
        status: SUCCESS,
        logs: logs
    }
}

export const FETCH_LOGS_ERROR = 'FETCH_LOGS_ERROR'
export function fetchLogsFailure(error) {
    return {
        type: FETCH_LOGS_ERROR,
        status: FAILURE,
        error: error
    }
}


export const RUN_COMMAND_PENDING = 'RUN_COMMAND_PENDING'
export function runCommandsPending(){
    return {
        type: RUN_COMMAND_PENDING
    }
}

export const RUN_COMMAND_SUCCESS = 'RUN_COMMAND_SUCCESS'
export function runCommandsSuccess(commands) {
    return {
        type: RUN_COMMAND_SUCCESS,
        status: SUCCESS,
        commands: commands
    }
}

export const RUN_COMMAND_ERROR = 'RUN_COMMAND_ERROR'
export function runCommandsFailure(error) {
    return {
        type: RUN_COMMAND_ERROR,
        status: FAILURE,
        error: error
    }
}
