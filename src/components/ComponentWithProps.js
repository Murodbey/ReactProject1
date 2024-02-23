import React from 'react'
import ThirdComponent from './ThirdComponent'

const ComponentWithProps = (props) => {
    const uchastka = '2 etajli uchastka 8 sotu'
    console.log(props)
    return (
        <>I am a component with props. My prop contains name with value {props.myName}, with global variable of {props.someGlobalVar}
        Otamdan qogan mowina bor: {props.otadanQoganMowinBu} va buni man o'glimga qoldiraman!
        <ThirdComponent sangaAtabQoyganMowinamBolam = {props.otadanQoganMowinBu} sangaMeros={uchastka}/>
        </>
    )
}

export default ComponentWithProps