import React,{useState} from 'react' // useState hook for state management

const ComponentWithState = () => {
    console.log('rendering . . . ')
    let name = 'Murod'
    const changeName = () => {
        name = 'Hojiakbar'
    }
    const [count, setCount] = useState(2) //state
    const changeCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            I am component with state. Count is <span>{count}</span>
            <br/>My name is <span>{name}</span>
            <br/><button onClick={()=>setCount(count + 1)}>Change count</button>
            {/* here we can use just changeCount as well */}
            <br/><button onClick={changeName}>Change name</button>
        </div>
    )
}

export default ComponentWithState