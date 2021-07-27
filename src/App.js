import TodoList from './TodoList'
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App () {
  const [todos, setTodo] = useState([])

  function handleClearCompleted () {
    const newTodos = todos.filter((todo) => todo.complete === false)
    setTodo(newTodos)
  }

  function handleAddTodo () {
    const name = todoNameRef.current.value
    console.log(name)
    if (name === '') return
    setTodo([...todos, { id: uuidv4(), name: name, complete: false }])
    todoNameRef.current.value = null
  }

  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodo(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <input ref={todoNameRef} type="text" placeholder="Type here . . ." />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearCompleted}>Clear Complete</button>
      <TodoList todos={ todos } setTodo={setTodo} />
    </>
  )
}

export default App
