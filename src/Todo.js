import React from 'react'

export default function Todo ({ todo, toggleTodo }) {
  function handleCheck () {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <input onChange={handleCheck} type="checkbox" name={`item-${todo.id}`} id={`item-${todo.id}`} checked={todo.complete}/>
      <label htmlFor={`item-${todo.id}`}>{todo.name}</label>
    </div>
  )
}
