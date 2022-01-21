import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import {theme} from '../src/theme'
import Layout from '../src/components/Common/Layout'
import absoluteUrl from 'next-absolute-url'
import { useEffect } from 'react'

let url = "http://localhost:3000/";
function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const {origin} = absoluteUrl()
        url = origin
    }, []);
    
    return <ThemeProvider data-testid={"theme-provider"} theme={theme}>
        <Layout >
            <Component data-testid={"component"} {...pageProps} />
        </Layout>
    </ThemeProvider>
}
export const baseUrl = url
export default MyApp
