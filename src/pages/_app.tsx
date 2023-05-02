import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import Dracula from '../styles/dracula'

export default function App({ Component, pageProps }: AppProps) {

  return <ThemeProvider theme={Dracula}>
  <Component {...pageProps} />
  </ThemeProvider>  

}
