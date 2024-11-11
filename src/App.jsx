import { useReducer, useState } from 'react'
import reducer from './utilites/listReducer.mjs'
import Input from './components/Input'
import AddButton from './components/AddButton'
import List from './components/List'

import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [list, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h1>To-Do List</h1>
      <h3>Add item to list</h3>
      <Input state={task} setTask={setTask} />
      <AddButton
        task={task}
        dispatch={dispatch}
        />
    <List tasks={list} dispatch={dispatch}/>
    </>
  );
};

export default App