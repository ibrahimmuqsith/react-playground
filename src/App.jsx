import React from 'react'

import './App.css'

function App() {

  document.cookie = "user=AbdulMuqsith; path=/home; max-age=3600"

  return (
    <>
      <header>
        <p className='text-3xl font-bold underline'>
          HI
        </p>

      </header>
      <main></main>
      <nav></nav>
      <aside></aside>
      <section className="card">
        {document.cookie}
      </section>
      <footer></footer>
    </>
  )
}

export default App
