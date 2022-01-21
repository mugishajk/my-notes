import { CardProps as TuiCardProps } from 'theme-ui'

export interface CardValidator {
    children: any,

}

export type CardProps =  CardValidator & TuiCardProps