import { Heading } from 'theme-ui'
import { HeadingProps } from './Heading.types'

export default function index({children, ...props}: HeadingProps) {
    return (
        <Heading data-testid="heading" {...props}>{children}</Heading>
    )
}
