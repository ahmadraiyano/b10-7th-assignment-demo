import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Header/Hero'
import Switch from './components/Switch/Switch'
import Players from './components/Players/Players'
import Selected from './components/Selected/Selected'
import News from './components/News/News'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <header className='w-10/12 mx-auto'>
        <Header></Header>
        <Hero></Hero>
      </header>
      <main className='w-10/12 mx-auto mt-14 relative'>
      <section>
        <Switch></Switch>
      </section>
      <section>
        <Players></Players>
      </section>
      <section className='hidden'>
        <Selected></Selected>
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
