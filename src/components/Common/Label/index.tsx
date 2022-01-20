import { Label, LabelProps } from 'theme-ui'

const index = ({children}: LabelProps) => {
    return (
        <Label data-testid="label">{children}</Label>
    )
}

export default index
