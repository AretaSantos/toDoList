
import './App.css';
import React, {useState} from 'react';
import Todolist_delete from './components/Todolist_delete';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            ToDoList
          </Typography>
        </Toolbar>
      </AppBar>
   <Todolist_delete/>
    </div>
  );
}

export default App;
