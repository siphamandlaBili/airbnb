import Header from "./component/layout/Header"
import { ChakraProvider } from '@chakra-ui/react'
function App() {

  return (
    <ChakraProvider>
    <div>
      <Header/>
    </div>
    </ChakraProvider>
  )
}

export default App
