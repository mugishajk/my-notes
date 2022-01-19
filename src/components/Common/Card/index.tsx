import { Card } from 'theme-ui'
import { CardProps } from './Card.types'

export default function index({children, ...props}: CardProps) {
    return (
        <Card data-testid="card" {...props}>{children}</Card>
    )
}
