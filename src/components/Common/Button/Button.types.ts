import { ButtonProps as TuiButtonProps } from 'theme-ui'
import * as t from "io-ts"

export const ButtonValidator = t.type({
    "text":t.string,

})

export type ButtonProps = t.TypeOf<typeof ButtonValidator> & TuiButtonProps