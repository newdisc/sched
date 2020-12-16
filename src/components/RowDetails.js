import React, {useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { UncontrolledCollapse, Table, ListGroup, ListGroupItem } from 'reactstrap'
import { Button } from 'reactstrap'
import { Spinner } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export const getButtonIcon = (isPending) => {
    if (isPending) {
        return (<Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          color="danger"
        />)
    } else {
        return (
            <FontAwesomeIcon icon={faPlay} />
        )
    }
}
const searchRow = (arrayTable, nameValue) => {
    //console.log("Finding row: " + nameValue)getRowClass,
    return arrayTable.find((item) => (item.name === nameValue))
}

const getRowLinkData = (rowData, column) => {
    let val = rowData[column]
    if ("target_job" === column) {
        return (
            <Link to={location => `/ui/jobs/${val}`}>{val}</Link>
            )
    }
    return val
}

const RowDetails = ({ 
    columns, determineRowClass, data, pending, logs,
    actionButton, runButton, retrieveLogs
}) => {
    const [lastId, setLastId] = useState("")
    let { id } = useParams()
    let ret = (<div>Retrieving {id}</div>)
    let dataRow = searchRow(data, id)
    useEffect(()=>{
        if (undefined === dataRow || 0 === dataRow.length) {
            actionButton()
        }
        if (undefined === logs || 0 === logs.length || ! logs[0].includes(id)) {
            if (id !== lastId) {
                retrieveLogs(id)
                setLastId(id)
            }
        }
    }, [lastId, setLastId, id, retrieveLogs, logs, dataRow, actionButton])
    if (undefined === dataRow) {
        return ret;
    }
    ret = (
    <div className="container spacetop">
        <div className="col">
            <div>
                <Button color="danger" onClick={() => runButton(id)}>
                    {getButtonIcon(pending)}
                </Button>
                {' '}
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {columns.map( (col, idx) => (
                    <tr key={idx}>
                        <td key={idx} className={determineRowClass(dataRow, col)}>
                            {col}
                        </td>
                        <td key={col} className={determineRowClass(dataRow, col)}>
                            {getRowLinkData(dataRow,col)}
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </Table>
            <div>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                    Logs
                </Button>
            </div>
            <UncontrolledCollapse toggler="#toggler">
                <ListGroup flush>
                    {logs.map((log,idx) => (
                        <ListGroupItem key={idx} tag="a" href={"/logs/"+log}>{log}</ListGroupItem>
                    ))}
                </ListGroup>
            </UncontrolledCollapse>
        </div>
    </div>
    )
    return ret;
}

export default RowDetails;

//import {getButtonIcon} from './IntegratedTable'
//import { Link } from 'react-router-dom'