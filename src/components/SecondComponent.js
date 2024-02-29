import React from "react";

const SecondComponent = (props) => {
    if(props.hidden){
        return null
    }
    return (
        < button >
            Click Me
        </button >
    )
}

export default SecondComponent;