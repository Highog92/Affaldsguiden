import buttonStyle from './Button.module.scss'


export function Button({ text, bgColor, txtColor, action, sizeW, sizeH, }) {



    return (
        <>
            <button className={buttonStyle.button} onClick={action}
                style={{ backgroundColor: bgColor, color: txtColor, width: sizeW, height: sizeH }}>
                {text}
            </button >
        </>
    )
}