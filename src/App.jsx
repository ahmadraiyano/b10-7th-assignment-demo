import './App.css'
import Hero from './components/Hero/Hero'
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

    const playerWindow = () => {
      document.getElementById("selectedBtn").classList.remove("bg-yellow-200");
      document.getElementById("playerBtn").classList.add("bg-yellow-200");
      document.getElementById("playerTitle").classList.remove("hidden");
      document.getElementById("selectedTitle").classList.add("hidden");
      document.getElementById("playerSection").classList.remove("hidden");
      document.getElementById("selectedSection").classList.add("hidden");
  }

  const selectedWindow = () => {
    document.getElementById("selectedBtn").classList.add("bg-yellow-200");
    document.getElementById("playerBtn").classList.remove("bg-yellow-200");
    document.getElementById("playerTitle").classList.add("hidden");
    document.getElementById("selectedTitle").classList.remove("hidden");
    document.getElementById("playerSection").classList.add("hidden");
    document.getElementById("selectedSection").classList.remove("hidden");
}

    

  return (
    <>
      <header className='w-10/12 mx-auto'>
        <Hero></Hero>
      </header>
      <main className='w-10/12 mx-auto mt-14 relative'>
      
        <div>
        <section>
        <div className="flex justify-between items-center">
           <div>
            <div id="playerTitle"><h2>Available Players</h2></div>
            <div id="selectedTitle" className="hidden"><h2>Selected Player</h2></div>
           </div>
           <div>
            <button id="playerBtn" onClick={playerWindow} className="p-2 bg-yellow-200 rounded-md">Available</button>
            <button id="selectedBtn" onClick={selectedWindow} className="p-4 rounded-md">Selected</button>
           </div>
        </div>
      </section>
      <section id="playerSection">
        <Players handleAddToSelected={handleAddToSelected}></Players>
      </section>
      <section id="selectedSection" className='hidden'>
        <Selected selected={selected}></Selected>
      </section>
        </div>

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
