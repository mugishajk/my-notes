import { SwitchProps as TuiSwitchProps } from 'theme-ui'
import * as t from "io-ts"

export const SwitchValidator = t.type({

})

export type SwitchProps = t.TypeOf<typeof SwitchValidator> & TuiSwitchProps