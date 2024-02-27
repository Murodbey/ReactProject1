import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import './TableMain.css'

const TableMain = ({ tableData }) => {
    console.log(tableData)
    return (
        <table className='table'>
            <TableHead heading={tableData.tableHead} />
            {tableData.tableBody.map((item) => {
                return (<TableRow rowItem={item} />)
            })}
        </table>
    )
}

export default TableMain