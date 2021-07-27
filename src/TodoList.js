import React from 'react'
import Todo from './Todo'

export default function TodoList ({ todos, setTodo }) {
  function toggleTodo (id) {
    const newTodo = [...todos]
    const todo = newTodo.find(todo => todo.id === id)
    console.log('Single Todo', todo)
    todo.complete = !todo.complete
    setTodo(newTodo)
  }
  return (
    todos.map(todo => {
      return (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
      )
    })
  )
}
