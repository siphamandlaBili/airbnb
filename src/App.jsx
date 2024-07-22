import Layout from "./component/layout/Layout"
import Home from "./component/Home"
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Search from "./component/Search";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[{
      index:true,
      element:<Home/>
    },
    {
      path: '/search',
      
    }
  ]
  }
  ,
  // {
  //   path: '/Home',
  //   element: <Home/>
  // }
 
])
function App() {

  return (
    <RouterProvider router={route} >
    <ChakraProvider>
    <div>
      <Layout/>
    </div>
    </ChakraProvider>
    </RouterProvider>
  )
}

export default App
