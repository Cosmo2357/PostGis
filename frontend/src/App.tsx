import Router from './Router'

import './App.css'
import { ExampleProvider, UserProvider } from './context/index'


function App() {

  return (
    <>
      <UserProvider>
        <ExampleProvider>
          <Router />
        </ExampleProvider>
      </UserProvider>
    </>
  )
}

export default App
