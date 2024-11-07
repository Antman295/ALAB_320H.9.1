import { useReducer, useState } from 'react'
import listReducer from './utilites/listReducer.mjs'
import Input from './components/Input'

import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [list, dispatch] = useReducer(listReducer, {count: 0});


  return (
    <>
      <h1>To-Do List</h1>
      <h3>Add item to list</h3>
      <Input state={task} setTask={setTask} />
    </>
  )
}

export default App
