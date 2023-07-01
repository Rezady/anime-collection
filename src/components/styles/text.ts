import styled from '@emotion/styled'
import { TextProps } from './types'

export const Text = styled.p(
    {
        margin: 0
    },
    ({margin, size, weight, color, link}:any) => ({
        margin: margin ?? 0,
        fontSize: size ?? 14,
        fontWeight: weight,
        color: color,
        cursor: link && "pointer",
        '&:active': {
            opacity: link && '0.7'
        }
    })
)

export const H3 = styled.h3(
    { 
        margin: 0
    },
    (props:{color?:string, weight?:number}) => ({
        color: props.color ?? "rgb(92,114,138)",
        fontWeight: props.weight ?? 400,
    })
)