import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='todo-app'>
      <TodoForm />
    </div>
   </>
  )
}

export default App
