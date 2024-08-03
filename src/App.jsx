import { useState } from 'react'
import './App.sass'
import Header from "@components/Header/Header.jsx";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
        <Header></Header>
        <main className="main" id="main">
            <Outlet></Outlet>
        </main>
    </>
  )
}

export default App
