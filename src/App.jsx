import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './App.css'

/**
 * SANGAI App Entry Point
 * Uses React Router for page navigation
 */
function App() {
  return <RouterProvider router={router} />
}

export default App
