import React, { useState } from 'react';
import { render } from 'react-dom';
import Message from '../Message/Message';

export default class MessageField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messages: props.messages,
      counter: props.counter
    }
  }


componentDidUpdate(prevProps) {
  if (prevProps.counter !== this.props.counter) {
    prevProps.messages.push({author: 'Bot', text: 'Привет!'})
    this.setState({messages: prevProps.messages,counter: this.props.counter})
  }
}

render() {
  console.log(this.state);
  return (
    this.state.messages.map((message, index) => (
      <Message author={message.author} text={message.text} key={index}/>
    )))
  }
}


