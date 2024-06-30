import React from 'react'
import ReactDOM from 'react-dom/client'

//arrow function
const Title = () => <h1>Hello Title Component</h1>

const Content = () => <p>Blalalallalala</p>

const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
