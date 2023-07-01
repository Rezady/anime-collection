import styled from '@emotion/styled'
import { RowProps } from './types'

export const Row= styled.div(
  {
    display: 'flex',
  },
  (props:RowProps) => ({
    gap: props.gap ?? 10,
    alignItems: props.alignItems ?? "flex-start",
    justifyContent: props.justifyContent ?? "flex-start",
    marginTop: props.marginTop ?? 0,
    margin: props.margin,
    padding: props.padding,
    background: props.background,
    flex: props.flex,
    height: props.height,
    width: props.width,
    alignSelf: props.alignSelf,
    justifySelf: props.justifySelf
  })
)

export const Column = styled(Row)`
  flex-direction: column;
`