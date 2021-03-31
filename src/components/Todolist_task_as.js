import React, { useState } from 'react';

function Todolist() {

    const [task, setTask] = useState({description: '', date:''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTask({...task, [event.target.name]: event.target.value});
      }

    const addTodo = (event) => {
        event.preventDefault();
          setTodos([...todos, task])
        }

    
  
    return (
      <div className="App">
        <h2>ToDoList</h2>
        <form onSubmit={addTodo}>
       <input type="text" value={task.description} onChange={inputChanged} placeholder="Description" name="description" />
       <input type="text" value={task.date} onChange={inputChanged} placeholder="Date" name="date" />
       <input type="submit" value="add"/>
       </form>
       <table>
         <tbody>
           {
             todos.map((task, index) =>
              
                     <tr key={index}>
                         <td>{task.description}</td>
                         <td>{task.date}</td>
                        
                     </tr>
                 
              )
           }
         </tbody>
       </table>
      </div>
    );
  }


export default Todolist;