import { CardProps as TuiCardProps } from 'theme-ui'
import * as t from "io-ts"

export interface CardValidator {
    children: any,

}

export type CardProps =  CardValidator & TuiCardProps