import React from 'react'
import ReactDOM from 'react-dom/client'

//arrow function
const Title = () => <h1>Hello Title Component</h1>

const Content = () => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum
            eum, repudiandae assumenda quisquam saepe, laboriosam facilis magni
            id amet voluptatibus tenetur voluptatum sequi iure!
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            optio?
        </p>
    </div>
)
const App = () => (
    <div>
        <Title />
        <Content />
    </div>
)
const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
