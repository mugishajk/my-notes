import { HeadingProps as TuiHeadingProps } from 'theme-ui'

export interface HeadingValidator {
    children: JSX.Element
    | JSX.Element[]
    | string
    | string[]

}

export type HeadingProps =  HeadingValidator & TuiHeadingProps