import React from 'react'
import ReactDOM from 'react-dom/client'

//arrow function
const Title = () => <h1>1.Hello Title Component</h1>
const TitleApp = () => <h1>2.Hello App Component</h1>
const TitleReact = () => <h1>3.Hello React Component</h1>

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
        <Title />
        <TitleApp />
        <TitleReact />

        <Content />
    </>
)
const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
