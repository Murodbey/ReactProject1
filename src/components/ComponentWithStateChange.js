import React from 'react'
import './ComponentWithStateChange.css'

const ComponentWithStateChange = ({toHide, hidden}) => {
    const hideOtherComponents =() => {
        toHide(!hidden)
    }
    return (
        <div>
            Hey I am component that can change state in other component. For example App
            <br/>
            Click below to see some magic!!!
            <div className='btn' onClick={()=>toHide(!hidden)}>Abra Kadabra!</div>
            <div className='btn' onClick={hideOtherComponents}>Abra Kadabra!</div>
        </div>
    )
}

export default ComponentWithStateChange