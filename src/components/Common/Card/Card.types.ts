import { CardProps as TuiCardProps } from 'theme-ui'

export interface CardValidator {
    children: JSX.Element
    | JSX.Element[]
    | string
    | string[]

}

export type CardProps =  CardValidator & TuiCardProps