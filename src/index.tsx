import React from 'react'
import ReactDOM from 'react-dom/client'

type HeaderProps = {
    text: string
    leftPart: string
    rightPart: string
    numbersPart?: number
}

const Header = (props: HeaderProps) => {
    return (
        <h1>
            {props.numbersPart} {props.leftPart} {props.text} {props.rightPart}
        </h1>
    )
}

const Content = () => (
    <React.Fragment>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum
            eum, repudiandae assumenda quisquam saepe, laboriosam facilis magni
            id amet voluptatibus tenetur voluptatum sequi iure!
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            optio?
        </p>
    </React.Fragment>
)
const App = () => (
    <>
        <Header
            numbersPart={1}
            text=" Title"
            leftPart="Hello"
            rightPart="Test"
        />
        <Header
            numbersPart={45}
            text=" App"
            leftPart="Hi"
            rightPart="Bla bla"
        />
        <Header
            numbersPart={12}
            text=" React"
            leftPart="Bye bye"
            rightPart="WHIWHI"
        />
        <Content />
    </>
)
const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
