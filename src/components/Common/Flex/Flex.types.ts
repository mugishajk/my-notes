import { FlexProps as TuiFlexProps } from 'theme-ui'

export interface FlexValidator {
    children: JSX.Element
    | JSX.Element[]
    | string
    | string[]
}

export type FlexProps = FlexValidator & TuiFlexProps