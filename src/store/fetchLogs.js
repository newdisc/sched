import {fetchLogsPending, fetchLogsSuccess, fetchLogsFailure} from './actions'

function fetchLogs(url){
    //console.log("Before Fetching from:", url)
    return dispatch => {
        //console.log("Fetching from:", url)
        dispatch(fetchLogsPending());
        fetch(url)//'http://localhost:8080/triggers'
            .then(res => res.json())
            .then(res => {
                //console.log("Json results")
                //console.log(res)
                dispatch(fetchLogsSuccess(res))
                return res;
            })
            .catch( error => {
                dispatch(fetchLogsFailure(error))
            })
    }
}

export default fetchLogs
