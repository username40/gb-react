import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

function ContactItem(props) {
    return (
      <>
      <Card variant="outlined">
        <p>{props.name}</p>
      </Card>
      <Divider/>
      </>
    )
  }
  
  export default ContactItem