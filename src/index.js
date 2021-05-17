import React from "react"
import ReactDOM from "react-dom"

const messages = ["test1"]

const updateData = () => {
  messages.push('норм!')
  render()
}

const Message = ({message}) => (
<React.Fragment>
  <h1>{message}</h1>
</React.Fragment>
)

const MessageField = ({messages}) => (
  <>
  <button onClick={updateData}>send!</button>
  {messages.map((message, index) => (
    <Message message={message} key={index}/>
  ))}
  </>
)

const render = () => {
  ReactDOM.render(
    <MessageField messages={messages} />,
    document.getElementById("root"),
  )
}

render()