import React, { useState } from "react";

const IncrementCount = ({hidden}) => {
    const [sanash, sanashFunction] = useState(2)

    const qoshish = () => sanashFunction(sanash + 1)
    const ayirish = () => sanashFunction(sanash - 1)

    if(hidden) {
        return null;
    }
    return (
        <div>I am increment Component {sanash}
            <br /><button onClick={qoshish}>increments count</button>
            <br /><button onClick={ayirish}> decrements count</button>
        </div>
    )
}

export default IncrementCount