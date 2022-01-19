import { Text } from 'theme-ui'
import { TextProps } from './Text.types'

export default function index({text, ...props}: TextProps) {
    return (
        <Text data-testid="text" {...props}>{text}</Text>
    )
}
