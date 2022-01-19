import { Textarea } from 'theme-ui'
import { TextareaProps } from './Textarea.types'

export default function index({ ...props}: TextareaProps) {
    return (
        <Textarea data-testid="text-area" {...props}/>
    )
}