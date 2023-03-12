import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './ui-components/templates/Header.ui'
import GlobalStyle from './styles/Global'
import Footer from './ui-components/templates/Footer.ui'

const App = (): ReactElement => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default App
