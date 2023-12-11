import React, { useState } from 'react'

const TodoForm = () => {

    const [ input, setInput ] = useState('')
    const [ inputvalue, setInputValue ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    <input type="text"
    placeholder='Add a todo'
    value={input}
    name='text'
    className='todo-input'
    onChange={handleChange}
    />

    <button className='todo-button'>Add Item</button>
    </form>
  )
}

export default TodoForm