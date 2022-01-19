import { Button } from 'theme-ui'
import { ButtonProps } from './Button.types'

export default function index({text, ...props}: ButtonProps) {
    return (
        <Button data-testid="button" {...props}>{text}</Button>
    )
}
