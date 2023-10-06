import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Summary from './components/Summary'

import './../src/App.css'
import { FormProvider } from './context/FormProvider'

function App() {

  return (

    <>
      <Navbar />
      <Banner />
      <Summary />
      <Portfolio />
      <FormProvider>
        <Contact />
      </FormProvider>
      <Footer />
    </>
  )
}

export default App
