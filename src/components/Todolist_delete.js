import React, { useState, useRef } from 'react';
import Todotable from './Todotable';
import { AgGridReact} from 'ag-grid-react';
import { AgGridColumn} from 'ag-grid-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import { format } from 'date-fns';

const Todolist = () => {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const [date, handleChange] = useState(new Date());

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const handleDateChange = (date) => {
   setTodo({...todo, date: date.toISOString()})
    
  }

  const deleteTodo = () => {
    if(gridRef.current.getSelectedNodes().length > 0)
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    else
      alert('valitse ensin poisttava rivi');
  }

  const columns = [
    {headerName: "Description", field: "description", sortable: 'true', filter: true, floatingFilter: true},
    {headerName: "Date", field: "date", sortable: 'true', filter: true, floatingFilter: true},
    {headerName: "Priority", field: "priority", sortable: 'true', filter: true, floatingFilter: true,
    cellStyle: params => params.value === 'High' ? {color: 'red'} : {color: 'black'}}
    
  ];

  return (
    <div>
      
        <TextField 
        style = {{margin:5}}
        label="Description" 
        onChange={inputChanged} 
        placeholder="Description" 
        name="description" 
        value={todo.description}/>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>  
        <DatePicker 
        format="dd.MM.yyyy"
        value={todo.date} 
        onChange={handleDateChange}
         style = {{margin:5}}
         label ="Date" 
         placeholder="Date" 
         name="date" />
      </MuiPickersUtilsProvider>
        <TextField 
        style = {{margin:5}}
        label="Priority" 
        onChange={inputChanged} 
        placeholder="Priority" 
        name="priority" 
        value={todo.priority}/>
        <Button style = {{margin:5}} variant="contained" color="default"  onClick={addTodo}>
          Add</Button>
        <Button style = {{margin:5}} variant="contained" color="secondary" onClick={deleteTodo}>
          Delete</Button>
        <div className="ag-theme-material" 
        style={{ width: '50%', height: '700px', margin: 'auto'}}>
        <AgGridReact
        rowData={todos}
        columnDefs={columns}
        rowSelection="single"
        animateRows="true"
        ref={gridRef}
        onGridReady={ params => gridRef.current = params.api}
         />

         </div>
    </div>
  );
};

export default Todolist;

