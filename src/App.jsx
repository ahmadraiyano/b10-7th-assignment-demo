import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Switch from './components/Switch/Switch'
import Players from './components/Players/Players'
import Selected from './components/Selected/Selected'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {

    const [selected, setSelected] = useState([]);
    

    const handleAddToSelected = player => {
      const newSelected = [...selected, player]
      setSelected(newSelected)
    }

  

    

  return (
    <>
      <header className='w-10/12 mx-auto'>
        <Hero></Hero>
      </header>
      <main className='w-10/12 mx-auto mt-14 relative'>
      <section>
        <Switch></Switch>
      </section>
      <section>
        <Players handleAddToSelected={handleAddToSelected}></Players>
      </section>
      <section>
        <Selected selected={selected}></Selected>
      </section>
      <section className='absolute -bottom-40 w-full mx-auto'>
        <News></News>
      </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
