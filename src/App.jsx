import { useReducer, useState } from 'react'
import listReducer from './utilites/listReducer.mjs'
import Input from './components/Input'
import AddButton from './components/AddButton'
import List from './components/List'

import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [list, dispatch] = useReducer(listReducer, []);


  return (
    <>
      <h1>To-Do List</h1>
      <h3>Add item to list</h3>
      <Input state={task} setTask={setTask} />
      <AddButton
        type="add_task"
        payload={{task}}
        dispatch={dispatch}
    > Add </AddButton>
    <List tasks={list}/>
    </>
  );
};

export default App
