import Head from 'next/head'
import Navbar from '../Navbar'

interface Props {
    children:any
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Head>
                <title>Note App</title>
            </Head>  
            <Navbar/>
            {children}
        </>
    )
}

export default Layout
