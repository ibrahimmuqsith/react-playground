import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Stopwatch from './components/Stopwatch'
import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'
import TodoList from './components/TodoList'
import Carousel from './components/Carousel'
import Quiz from './components/Quiz'
import FormValidation from './components/FormValidation'
import Counter from './components/Counter'
import WordCount from './components/WordCount'
import QuoteGenerator from './components/QuoteGenerator'
import PasswordGenerator from './components/PasswordGenerator'
import BmiCalculator from './components/BmiCalculator'
import HeaderNameContext from './utils/HeaderNameContext'

function App() {

  const [compTitle, setCompTitle] = useState()
  document.cookie = "user=AbdulMuqsith; path=/home; max-age=3600"

  return (
    <HeaderNameContext.Provider value={{ headerName: compTitle, setCompTitle }}>
      <div className=''>
        <section className='w-full'>
          <Header />
        </section>
        <section className='w-full flex'>
          <aside className='w-80 m-2'>
            <NavBar />
          </aside>
          <section className='w-3/4 border-2 p-2 m-2 min-h-full'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/todolist'
                element={<TodoList />}
              />
              <Route
                path='/stopwatch'
                element={<Stopwatch />}
              />
              <Route
                path='/carousel'
                element={<Carousel />}
              />
              <Route
                path='/quiz'
                element={<Quiz />}
              />
              <Route
                path='/formvalidation'
                element={<FormValidation />}
              />
              <Route
                path='/counter'
                element={<Counter />}
              />
              <Route
                path='/wordcount'
                element={<WordCount />}
              />
              <Route
                path='/quotegenerator'
                element={<QuoteGenerator />}
              />
              <Route
                path='/passwordgenerator'
                element={<PasswordGenerator />}
              />
              <Route
                path='/bmicalculator'
                element={<BmiCalculator />}
              />
            </Routes>
          </section>
        </section>
      </div>
    </HeaderNameContext.Provider>
  )
}

export default App
