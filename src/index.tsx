import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Content from './Content'
type ContentType = {
    title: string
    text1: string
    text2: string
}

const user = {
    name: `Jack`,
    age: 10,
}

const { name, age } = user

console.log(name, age)
const App = () => {
    return (
        <>
            <Header
                order={3}
                text="Title"
                leftPart="Hello"
                rightPart="Test"
                background="aqua"
                color="orange"
            />
            <Header
                text="App"
                leftPart="Hi"
                rightPart="Bla-Bla"
                background="green"
                color="midnight"
            />
            <Header
                text="React"
                leftPart="Bye-bye"
                rightPart="Rainbow"
                color="lightgreen"
            />
            <Content title="Content 1" text1="hello 1" text2="Hello 2" />
            <Content
                title="Content 2"
                text1="hello 1"
                text2="Hello 2 lorem blalb alblablbl"
            />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
