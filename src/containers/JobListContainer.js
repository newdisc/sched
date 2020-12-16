import { connect } from 'react-redux'
import IntegratedTable from '../components/IntegratedTable'
import fetchCommands, {runCommands} from '../store/fetchCommands'
import fetchLogs from '../store/fetchLogs'

export const job_columns = ["name", "fullCommand", "template", "mainClass", "mainMethod", "cronCondition", "timeZone"];


const mapStateToProps = state => {
    return {
        columns: job_columns,
        data: state.jobCommands.commands,
        pending: state.jobCommands.pending,
        error: state.jobCommands.error,
        colorButton: 'primary'
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getRowClass: () => {return ""},
        actionButton: () => {dispatch(fetchCommands('/api/job/list'))},
        runButton: (name) => {dispatch(runCommands('/api/job/execute?jobName=' + name ))},
        retrieveLogs: (name) => {dispatch(fetchLogs('/api/job/logs?pattern=' + name ))},
        determineRowClass: () => {return ""}
    }
}


const JobListContainer = connect(mapStateToProps, mapDispatchToProps)(IntegratedTable)

export default JobListContainer
