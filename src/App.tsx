import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <ChakraProvider>
      <SearchBar></SearchBar>
    </ChakraProvider>
  )
}

export default App
