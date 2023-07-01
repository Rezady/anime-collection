/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react'
import { ContainerMenu, MenuLink , activeMenu, menu} from './styles'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { H3 } from '../styles/text'

const menuList = [
	{name: "Anime List", link: '/'},
	{name: "Collection", link: '/collection'},
	{name: "Stats", link: '/'}
]

const Navbar:FC = () => {
	const [currentKey, setCurrentKey] = useState(0)
  return (
    <ContainerMenu>
			<H3 weight={600}>AnimeCollection</H3>
			<MenuLink>
				{menuList.map((value, key) => (
					<Link
						key={key}
						to={value.link}
						css={css(key === currentKey ? activeMenu : menu)}
						onClick={() => setCurrentKey(key)}
					>
						{value.name}
					</Link>
				))}
			</MenuLink>
			<div></div>
    </ContainerMenu>
  )
}

export default Navbar