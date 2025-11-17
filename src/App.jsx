import React from 'react'

import './App.css'
import Stopwatch from './components/Stopwatch'

function App() {

  document.cookie = "user=AbdulMuqsith; path=/home; max-age=3600"

  return (
    <>
      <header>
        <nav>
          {document.cookie}
        </nav>
      </header>

      <main>
        <aside className=''>

        </aside>

        <section className=''>
          <Stopwatch />
        </section>

      </main>

      <footer></footer>
    </>
  )
}

export default App
