import { connect } from 'react-redux'
import  RowDetails  from '../components/RowDetails'
import { mapDispatchToProps} from './TriggerListContainer'

export const trigger_columns = ["name", "parent", "status", "job", "dependencies", "arguments", "qualifier"
        ];
        
const mapStateToProps = (state, ownProps) => {
    return {
        columns: trigger_columns,
        data: state.jobTriggers.triggers,
        pending: state.jobTriggers.pending,
        error: state.jobTriggers.error,
        logs: state.jobLogs.logs
    }
}

const TriggerDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(RowDetails)

export default TriggerDetailsContainer
