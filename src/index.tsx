import React from 'react'
import ReactDOM from 'react-dom/client'

type HeaderProps = {
    text: string
}

const Header = (props: HeaderProps) => {
    console.log(props)
    return <h1>Hello {props.text} Component</h1>
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
        <Header text="Title" />
        <Header text="App" />
        <Header text="React" />

        <Content />
    </>
)
const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
