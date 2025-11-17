import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Stopwatch from './components/Stopwatch'
import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {

  document.cookie = "user=AbdulMuqsith; path=/home; max-age=3600"

  return (
    <>
      <section className='w-full'>
        <Header />
      </section>
      <section className='w-full flex'>
        <aside className='w-80'>
          <NavBar />
        </aside>
        <section className='w-3/4 border-2 p-2 m-5 min-h-full'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/stopwatch'
              element={<Stopwatch />}
            />
          </Routes>
        </section>
      </section>
    </>

  )
}

export default App
