import React from 'react'
import ReactDOM from 'react-dom/client'

type HeaderProps = {
    text: string
    leftPart: string
    rightPart: string
}

const Header = (props: HeaderProps) => {
    return (
        <h1>
            {props.leftPart}
            {props.text}
            {props.rightPart}
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
        <Header text="Title" leftPart="Hello" rightPart="Test" />
        <Header text="App" leftPart="Hi" rightPart="Bla bla" />
        <Header text="React" leftPart="Bye bye" rightPart="WHIWHI" />
        <Content />
    </>
)
const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
