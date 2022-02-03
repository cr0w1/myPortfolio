import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../assets/configs/theme'
import NavBar from './components/nav_bar/nav_bar'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
            <NavBar/>
            <Component {...pageProps} />
        </ChakraProvider>
}

export default MyApp
