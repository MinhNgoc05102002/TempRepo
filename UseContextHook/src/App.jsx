import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './App.css'
import Content from './Content';

// Context
// Theme Dark/Light

// 1. Create context 
// 2. Provider  
// 3. Consumer

function App() {
  const context= useContext(ThemeContext)

  return (
      <div style={{padding: 20}}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  )
}

export default App
