import { NavLink } from 'theme-ui'
import { NavLinkProps } from './NavLink.types'

export default function index({children, ...props}: NavLinkProps) {
    return (
        <NavLink data-testid="nav-link" {...props}>{children}</NavLink>
    )
}
