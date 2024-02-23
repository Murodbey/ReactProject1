import React from 'react'

const ThirdComponent = ({sangaMeros, sangaAtabQoyganMowinamBolam}) => {
    return (
        <div>I am a third component. I am a grandchild now and i have been passed a props from my father.
           Dada bu {sangaAtabQoyganMowinamBolam}ni nima qilaman hozi hamma gentradaku. Lekin {sangaMeros}ni boplabsiz
        </div>
    )
}

export default ThirdComponent