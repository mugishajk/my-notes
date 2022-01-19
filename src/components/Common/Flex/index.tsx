import { Flex } from 'theme-ui'
import { FlexProps } from './Flex.types'

export default function index({children, ...props} : FlexProps) {
    return (
        <Flex data-testid="flex" {...props}>{children} </Flex>
    )
}
