import { useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {actions, useStore} from './store';


function App() {
  // const [state, dispatch] = useContext(StoreContext)
  // sua chut thanh nhu nay 
  const inputRef = useRef()
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state // viet nay chi de lay cho de thui

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))

    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder='Enter to do ...'
        onChange={ e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
       />
       <button onClick={handleAdd}>Add</button>
       {todos.map((todo, index) => (
          <li key={index}>
              {todo}
              <span style={{cursor: 'pointer'}} onClick={() => dispatch(actions.deleteTodo(index))}>&times;</span>
          </li>
       ))}
    </div>
  )
}

export default App
