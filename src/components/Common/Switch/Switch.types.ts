import { CheckboxProps as TuiSwitchProps } from 'theme-ui'
import * as t from "io-ts"

export const SwitchValidator = t.type({
    label:t.string
})

export type SwitchProps = t.TypeOf<typeof SwitchValidator> & TuiSwitchProps