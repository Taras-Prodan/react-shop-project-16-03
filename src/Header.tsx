type HeaderProps = {
    text: string
    leftPart: string
    rightPart: string
    order?: number
    background?: string
    color?: string
}

const Header = ({
    order,
    leftPart,
    text,
    rightPart,
    background = 'purple',
    color = 'white',
}: HeaderProps) => {
    return (
        <h1
            style={{
                background: background,
                color: color,
                fontSize: '30px',
                padding: '20px',
            }}
        >
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

export default Header
