import './Button.css'

const Button = ({ styleName, hidden }) => {
    if(hidden) {
        return null
    }
    return (
        <div className={styleName}>
            I am a {styleName} button
        </div>
    )
}

export default Button