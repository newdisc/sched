import { connect } from 'react-redux'
import  RowDetails  from '../components/RowDetails'
import {job_columns, mapDispatchToProps} from './JobListContainer'

const searchRow = (arrayTable, nameValue) => {
    console.log("Searching for: " + nameValue)
    return arrayTable.find((item) => (item.name === nameValue))
}

const mapStateToProps = (state, ownProps) => {
    let dr = searchRow(state.jobCommands.commands, ownProps.name)
    return {
        columns: job_columns,
        data: state.jobCommands.commands,
        logs: state.jobLogs.logs,
        dataRow: dr
    }
}


const JobDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RowDetails)

export default JobDetailsContainer