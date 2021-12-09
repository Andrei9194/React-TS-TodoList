import { useEffect, useState } from "react"
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList"
import { Todo } from "../interface"

export const TodoPages = () =>{

const [todos, setTodos] = useState<Todo[]>([])

  useEffect(()=>{
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[]
      setTodos(saved)
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) =>{
    const newTodo: Todo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) =>{
    const shoudRemove = window.confirm("Are you sure you want to delete the task?")
      if(shoudRemove){
        setTodos(prev=> prev.filter(todo=> todo.id !== id))
      }
  }

    return(
        <>
          <TodoForm onAdd={addHandler}/>
          <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>

        </>
    )
}