import React from 'react'

const TableRow = ({rowItem}) => {
    return (
        <tr>
            <td className='table'>{rowItem.product}</td>
            <td className='table'>{rowItem.inStock}</td>
            <td className='table'>{rowItem.price}</td>
        </tr>
    )
}

export default TableRow