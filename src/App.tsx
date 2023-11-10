
import './App.css'
import Header from './components/header'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import Section6 from './components/section6'
import Section7 from './components/section7'
import Section8 from './components/section8'
import Section9 from './components/section9'
import Section10 from './components/section10'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header/>
      <section
        className='bg-first-section bg-cover bg-no-repeat bg-center z-[1]'
      >
        <div className='h-[600px] flex items-center justify-center'>
          <div className='container text-center text-white'>
            <h1 className='font-serif'>
              Services
            </h1>
          </div>
        </div>
      </section>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <Footer/>
    </>
  )
}

export default App
