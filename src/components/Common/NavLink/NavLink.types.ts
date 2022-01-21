import { NavLinkProps as TuiNavLinkProps } from 'theme-ui'

export interface NavLinkValidator {
    children: JSX.Element
    | JSX.Element[]
    | string
    | string[]

}

export type NavLinkProps =  NavLinkValidator & TuiNavLinkProps