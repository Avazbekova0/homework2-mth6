import React from 'react'
import './styles/global.scss'
import { Header } from '../widgets/Header'
import { Banner } from '../widgets/Banner'
import { Footer } from '../widgets/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App