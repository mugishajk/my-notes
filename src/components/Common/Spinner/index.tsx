import React from 'react'
import { Spinner,SpinnerProps } from 'theme-ui'
import styles from '../../../styles/Spinner.module.css'
const index = (props: SpinnerProps) => {
    return (
        <div className={styles["spinner-container"]}> <Spinner data-testid={"spinner"} {...props}/></div>
    )
}

export default index
