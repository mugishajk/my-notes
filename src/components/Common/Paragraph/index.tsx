import { Paragraph } from 'theme-ui'
import { ParagraphProps } from './Paragraph.types'

export default function index({children, ...props}: ParagraphProps) {
    return (
        <Paragraph data-testid="paragraph" {...props}>{children}</Paragraph>
    )
}
