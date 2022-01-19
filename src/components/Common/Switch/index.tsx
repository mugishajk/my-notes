import { Switch } from 'theme-ui'
import { SwitchProps } from './Switch.types'

export default function index(props : SwitchProps) {
    return (
        <Switch data-testid="switch" {...props}/>
    )
}
