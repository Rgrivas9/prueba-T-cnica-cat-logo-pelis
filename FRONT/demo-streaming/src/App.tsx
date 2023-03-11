import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  )
}

export default App
