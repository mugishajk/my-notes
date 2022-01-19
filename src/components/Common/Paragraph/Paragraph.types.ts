import { ParagraphProps as TuiParagraphProps } from 'theme-ui'
import * as t from "io-ts"

export interface ParagraphValidator {
    children: any,

}

export type ParagraphProps =  ParagraphValidator & TuiParagraphProps