import React from 'react';
import classes from './Layout.module.css'
import ContactList from '../ContactList/ContactList'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MessageField from '../MessageField/Messagefield'

function Layout() {
  return (
    <div className={classes.Layout}>
      <AppBar  position="static">
        <Toolbar>
          <Typography variant="h6">Chat</Typography>
        </Toolbar>
      </AppBar>
    <div className={classes.flex}>
      <div className={classes.fg4}>
      <ContactList />
      </div>
    <div className={classes.border}></div>
    <div className={classes.fg8}>
    <MessageField/>
    </div>
    </div>
    </div>
  )
}

export default Layout