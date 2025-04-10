import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { Dashboard } from './Dashboard.tsx'
import { App } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Dashboard></Dashboard>
      <Routes>
        <Route path="/app" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
