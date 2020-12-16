import React, {useEffect} from 'react'
import { Table } from 'reactstrap'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import './IntegratedTable.css'

export const getColData = (dataRow, col) => {
  let val = dataRow[col]
  if ("name" === col) {
    return (
      <Link to={location => `${location.pathname}/${val}`}>{val}</Link>
    )
  } else {
    return val
  }
}
//
//      <Link to={location => `${location.pathname}/${val}`}>{val}</Link>

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
            <FontAwesomeIcon icon={faSync} />
        )
    }
}

const IntegratedTable = ({columns, data, colorButton, pending, error, getRowClass, actionButton}) => {
    useEffect(()=>{
        if (undefined === data || 0 === data.length) {
            actionButton()
        }
        setTimeout(() => {
            actionButton();
        }, 40000);
    }, [data, actionButton])
    return (
    <div className="container spacetop">
        <div className="col">
            <div>
                <Button color={colorButton} onClick={() => actionButton()}>
                    {getButtonIcon(pending)}
                </Button>
                {' '}
            </div>
            <Table hover bordered size="sm" className="col-lg">
                <thead id="Tooltip-Button1">
                    <tr>
                    {columns.map( (col, idx) => (
                        <th key={idx}>{col}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                {data.map((dataRow,idx) => (
                    <tr key={idx}>
                    {columns.map( (col, idxi) => (
                        <td key={idxi} className={getRowClass(dataRow, col)}>
                        {getColData(dataRow, col)}
                        </td>
                    ))}
                    </tr>                    
                ))}
                </tbody>
            </Table>
        </div>
    </div>
    )
}

export default IntegratedTable
/*
import {  useParams } from 'react-router-dom'
    //console.log("In Table")
    //console.log(props)
    let {type} = props //['type']
    //console.log(type)
    let base = props[type]
                    <FontAwesomeIcon icon={faSync} />
    //console.log(base)
    let { id } = useParams()
    //console.log(id)
import { Tooltip } from 'reactstrap'
                <Tooltip
                    placement='right-end'
                    isOpen={true}
                    target="Tooltip-Button1"
                ></Tooltip>
*/