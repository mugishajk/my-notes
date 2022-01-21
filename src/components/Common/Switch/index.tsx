import { Checkbox, Label } from 'theme-ui'
import { SwitchProps } from './Switch.types'

export default function index({label,...props} : SwitchProps) {
    return (
        <Label>
            <Checkbox data-testid="switch" {...props} /> {label}
        </Label>
     
    )
}
