import React from 'react'
import ReactDOM from 'react-dom/client'

function Title() {
    return <h1>Hello Title Component</h1>
}
function Content() {
    return <p>Blalalallalala</p>
}

const root = ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
        <Content />
    </React.StrictMode>
)
