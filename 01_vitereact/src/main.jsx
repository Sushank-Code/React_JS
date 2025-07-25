import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const username = "Sushank Lamsal"
const reactElement = React.createElement(
  'a',
  {
    href :'https://google.com',
    target: '_blank'
  },
  'click to visit google',
  username
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElement}
  </StrictMode>,
)
