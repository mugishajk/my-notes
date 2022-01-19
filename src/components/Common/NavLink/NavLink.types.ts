import { NavLinkProps as TuiNavLinkProps } from 'theme-ui'
import * as t from "io-ts"

export interface NavLinkValidator {
    children: any,

}

export type NavLinkProps =  NavLinkValidator & TuiNavLinkProps