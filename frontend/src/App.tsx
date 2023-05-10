import Router from './Router'

import './App.css'
import { ExampleProvider } from './context/index'

function App() {

  return (
    <>
      <ExampleProvider>
        <Router />
      </ExampleProvider>
    </>
  )
}

export default App
