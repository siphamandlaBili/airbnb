import Header from "./component/layout/Header"
import Home from "./component/Home"
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
    <div>
      <Header/>
      <Home/>
    </div>
    </ChakraProvider>
  )
}

export default App
