import { FieldProps as TuiFieldProps } from 'theme-ui'
import * as t from "io-ts"

export const FieldValidator = t.type({

})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldProps = t.TypeOf<typeof FieldValidator> & TuiFieldProps<any>