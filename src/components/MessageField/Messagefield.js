import React, { useState } from 'react';
import Message from '../Message/Message';

function MessageField(props) {
    const [mess, setMess] = useState(props.messages);
    
    return mess.map((message, index) => (
      <Message message={message} key={index}/>
    ))
  }

 export default MessageField
