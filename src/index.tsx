import React from 'react'
import ReactDOM from 'react-dom/client'
type HeaderProps = {
    text: string
    leftPart: string
    rightPart: string
    order?: number
}
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

const Header = ({ order, leftPart, text, rightPart }: HeaderProps) => {
    return (
        <h1>
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

type ContentTypes = {
    title: string
    text1: string
    text2: string
}
const Content = ({ title, text1, text2 }: ContentTypes) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </>
    )
}
const App = () => {
    return (
        <>
            <Header order={3} text="Title" leftPart="Hello" rightPart="Test" />
            <Header text="App" leftPart="Hi" rightPart="Bla-Bla" />
            <Header text="React" leftPart="Bye-bye" rightPart="Rainbow" />
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
