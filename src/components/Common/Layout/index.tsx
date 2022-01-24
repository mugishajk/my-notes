import Head from 'next/head'
import Navbar from '../Navbar'
import styles from '../../../styles/Layout.module.css'
interface Props {
    children:JSX.Element
    | JSX.Element[]
    | string
    | string[]
}

const Layout = ({children}: Props) => {
    return (
        <div className={`${styles["layout-container"]}`}>
            <Head>
                <title>Note App</title>
            </Head>  
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
