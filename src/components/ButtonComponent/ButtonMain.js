import './Button.css'

const Button = ({ styleName }) => {

    return (
        <div className={styleName}>
            I am a {styleName} button
        </div>
    )
}

export default Button