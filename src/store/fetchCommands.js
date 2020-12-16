//import fetch from 'cross-fetch'
import {fetchCommandsPending, fetchCommandsSuccess, fetchCommandsFailure} from './actions'
import {runCommandsPending, runCommandsSuccess, runCommandsFailure} from './actions'

function fetchCommands(url){
    //console.log("Before Fetching from:", url)
    return dispatch => {
        //console.log("Fetching from:", url)
        dispatch(fetchCommandsPending());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                //console.log("Json results")
                //console.log(res)
                dispatch(fetchCommandsSuccess(res))
                return res;
            })
            .catch( error => {
                dispatch(fetchCommandsFailure(error))
            })
    }
}

export function runCommands(url){
    //console.log("Before runing from:", url)
    return dispatch => {
        //console.log("runing from:", url)
        dispatch(runCommandsPending());
        fetch(url)//'http://localhost:8080/jobs'
            .then(res => res.json())
            .then(res => {
                //console.log("Json results")
                //console.log(res)
                dispatch(runCommandsSuccess(res))
                return res;
            })
            .catch( error => {
                dispatch(runCommandsFailure(error))
            })
    }
}

export default fetchCommands
