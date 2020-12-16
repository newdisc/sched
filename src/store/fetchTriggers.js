//import fetch from 'cross-fetch'
import {fetchTriggersPending, fetchTriggersSuccess, fetchTriggersFailure} from './actions'
import {runTriggersPending, runTriggersSuccess, runTriggersFailure} from './actions'

function fetchTriggers(url){
    //console.log("Before Fetching from:", url)
    return dispatch => {
        //console.log("Fetching from:", url)
        dispatch(fetchTriggersPending());
        fetch(url)//'http://localhost:8080/triggers'
            .then(res => res.json())
            .then(res => {
                //console.log("Json results")
                //console.log(res)
                dispatch(fetchTriggersSuccess(res))
                return res;
            })
            .catch( error => {
                dispatch(fetchTriggersFailure(error))
            })
    }
}

export function runTriggers(url){
    //console.log("Before runing from:", url)
    return dispatch => {
        //console.log("runing from:", url)
        dispatch(runTriggersPending());
        fetch(url)//'http://localhost:8080/triggers'
            .then(res => res.json())
            .then(res => {
                //console.log("Json results")
                //console.log(res)
                dispatch(runTriggersSuccess(res))
                return res;
            })
            .catch( error => {
                dispatch(runTriggersFailure(error))
            })
    }
}

export default fetchTriggers
