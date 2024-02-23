import React from 'react'


const TableHead = ({heading}) => {
    return (
        <tr>
            <th className='table'>{heading.firstHead}</th>
            <th className='table'>{heading.secondHead}</th>
            <th className='table'>{heading.thirdHead}</th>
        </tr>
    )
}

export default TableHead