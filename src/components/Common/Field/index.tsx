import { Field } from 'theme-ui'
import { FieldProps } from './Field.types'

export default function index(props : FieldProps) {
    return (
        <Field data-testid="field" {...props}/>
    )
}
