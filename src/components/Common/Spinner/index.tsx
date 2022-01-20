import React from 'react'
import { Spinner,SpinnerProps } from 'theme-ui'

const index = (props: SpinnerProps) => {
    return (
        <Spinner data-testid={"spinner"} {...props}/>
    )
}

export default index
