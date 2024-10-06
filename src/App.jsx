import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  const addTodo = () => {
    list.push(text)
    console.log(list);
    setList([...list])
    setText('')
  }

  const editTodo = (i) => {
    list[i] = prompt()
    console.log(list);
    
    setList([...list])

  }

  const deleteTodo = (i) => {
    list.splice(i,1)
    console.log(list);
    setList([...list])
  }

  return (
<div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
  <h1 className='pb-9 '>React Todo App</h1>
  <div className="flex gap-2 mb-4">
    <input
      className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter your task"
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      onClick={addTodo}
    >
      Add
    </button>
  </div>

  <ul className="space-y-2">
    {list.map((x, i) => (
      <li key={i} className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm">
        <span>{x}</span>
        <div className="flex space-x-2">
          <button
            className="text-green-500 hover:text-green-600"
            onClick={() => editTodo(i)}
          >
            Edit
          </button>
          <button
            className="text-red-500 hover:text-red-600"
            onClick={() => deleteTodo(i)}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
  )
}

export default App;
