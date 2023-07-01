import { FC, lazy } from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

const AnimeList = lazy(() => import('../page/AnimeList'))
const AnimeDetail = lazy(() => import('../page/AnimeDetail'))
const CollectionAnime = lazy(() => import('../page/CollectionAnime'))

const Router:FC = () => {
	const router = useRoutes(
		[{
			path: "/",
			element: <Layout><Navbar /></Layout>,
			children: [
				{
					path: "/",
					element:<Navigate to="/list" />
				},
				{
					path: "list",
					children: [
						{
							path: ":id",
							element: <AnimeDetail />
						},
						{
							path: "",
							element: <AnimeList />,
						},
					]
				},
				{
					path: "collection",
					element: <CollectionAnime />
				}
			]
		}]
	)
  return router
}

export default Router