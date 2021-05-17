import React, { useState } from 'react';
import Message from '../Message/Message';

function MessageField({messages}) {
    return messages.map((message, index) => (
      <Message message={message} key={index}/>
    ))
  }

 export default MessageField
