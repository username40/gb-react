import React from "react"
import ReactDOM from "react-dom"
import MessageField from './components/MessageField/Messagefield'

const messages = [{author: 'me', text: 'hello'}]

const updateData = () => {
  messages.push({author:'Я', text: 'норм'})
  render()
}

const app = () => (
  <>
    <button onClick={updateData}>send</button>
    <MessageField messages={messages} counter={messages.length}/>
  </>
)


const render = () => {
  ReactDOM.render(
    app(),
    document.getElementById("root"),
  )
}

render()