import React from 'react'
import ReactDOM from 'react-dom/client'
// This index.css import must happen before `App`, because it sets up our layer priority order
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
