import { FlexProps as TuiFlexProps } from 'theme-ui'
import * as t from "io-ts"

export interface FlexValidator {
    children: any
}

export type FlexProps = FlexValidator & TuiFlexProps