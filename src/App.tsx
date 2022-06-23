import { useState } from 'react'
import logo from './logo.svg';
import { Dashboard } from './pages/Dashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Dashboard />
  )
}

export default App
