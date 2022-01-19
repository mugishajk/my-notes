import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav data-testid={"navbar"} className={styles['navbar']}>
            <Link href="/">
                <a className={styles['navbar-brand']}>
                Note App
                </a>
            </Link>
            <Link href="/new">
                <a className={styles['navbar-create']}>
                Create note
                </a>
            </Link>
        </nav>
    )
}

export default Navbar
