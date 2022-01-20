import { Box, BoxProps } from 'theme-ui'

const index = ({children}: BoxProps) => {
    return (
        <Box data-testid={"box"}>
            {children}
        </Box>
    )
}

export default index
