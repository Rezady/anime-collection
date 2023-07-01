import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header } from './styles'
import { useUserContext } from '../../context/UserContext'

const Layout:FC<{children: JSX.Element | JSX.Element[]}> = ({children}) => {
  const {user} = useUserContext()
  return (
    <Container>
      <Header banner={user?.banner ?? ""} />
      {children}
      <Outlet />
    </Container>
  )
}

export default Layout