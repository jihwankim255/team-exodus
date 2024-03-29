import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
)
