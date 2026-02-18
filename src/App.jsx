import './App.css'
import Header from './components/header/Header'
import Lessons from './components/lessons/Lessons'
import Demos from './components/demos/Demos'
import Bio from './components/bio/Bio'
import Testimonials from './components/testimonials/Testimonials'
import InterestForm from './components/interestform/InterestForm'
import Footer from './components/footer/Footer'

function App() {
    return ( 
    <>
      <Header/>
      <main>
        <Lessons/>
        <Bio/>
        <Demos/>
        <Testimonials/>
        <InterestForm/>
      </main>
      <Footer/>
  </>
  )

}

export default App;

