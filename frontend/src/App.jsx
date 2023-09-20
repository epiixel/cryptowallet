import { useState } from 'react'
import './App.css'
import { BrowserRouter, useLocation, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';

const Transaction = () => {
  return (<Link to="/">Return</Link>)
}
const App = () => {

  return (
    <>
    {/* <Dashboard /> */}
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tx/" element={<Transaction />} />
    </Routes>
    </>
  )
}

export default App
