import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Stopwatch from './components/Stopwatch'
import Header from './components/Header'

function App() {

  document.cookie = "user=AbdulMuqsith; path=/home; max-age=3600"

  return (
    <>
      <section className='w-full'>
        <Header />
      </section>
      <section className='w-full flex'>
        <aside className='w-1/4'>
          HI
        </aside>
        <section className='w-3/4'>
          <Routes>
            <Route
              path='/'
              element={<Stopwatch />}
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
