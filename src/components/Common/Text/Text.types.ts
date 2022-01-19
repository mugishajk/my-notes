import { TextProps as TuiTextProps } from 'theme-ui'
import * as t from "io-ts"

export const TextValidator = t.type({
    "text":t.string,

})

export type TextProps = t.TypeOf<typeof TextValidator> & TuiTextProps