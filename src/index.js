import React from "react"
import ReactDOM from "react-dom"
import MessageBtn from "./components/MessageBtn/MessageBtn"
import MessageField from './components/MessageField/Messagefield'

const messages = [
  "test1",
   'уже не первое реакт сообщение',
    'черт возьми не понятно почему список не перерисовывается',
     'vue лучше!',
    'короче всяко вертел ничего не выходит',
  ]

const updateData = () => {
  console.log();
  
  messages.push('норм!')
}

const app = (
  <div>
    <MessageField messages={messages} />
    <MessageBtn onClick={updateData}/>
  </div>
)


  ReactDOM.render(
    app,
    document.getElementById("root"),
  )