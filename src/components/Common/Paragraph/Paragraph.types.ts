import { ParagraphProps as TuiParagraphProps } from 'theme-ui'

export interface ParagraphValidator {
    children: JSX.Element
    | JSX.Element[]
    | string
    | string[]

}

export type ParagraphProps =  ParagraphValidator & TuiParagraphProps