import React from 'react';

function Message(props) {
   return (
     <h2>{props.author}: {props.text}</h2>
   )
}

export default Message