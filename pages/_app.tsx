import '../src/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component data-testid={"component"} {...pageProps} />
}

export default MyApp
