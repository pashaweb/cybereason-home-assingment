import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>,
)
