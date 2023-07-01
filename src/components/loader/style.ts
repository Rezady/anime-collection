import { keyframes } from '@emotion/css'
import styled from '@emotion/styled'

export const ContainerLoader = styled.div({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  top: 0,
  left: 0,
  background: "rgba(0, 0, 0, 0.4)",
  display: "flex", 
  justifyContent: "center",
  alignItems: "center",
})

const spin = keyframes`
	0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

export const CircleLoader = styled.div({
	border: "16px solid #f3f3f3",
  borderRadius: "50%",
  borderTop: "16px solid #3498db",
  width: "60px",
  height: "60px",
  animation: `${spin} 2s linear infinite`,
})