import { FC, useEffect, useState } from 'react'
import { useUserContext } from '../../context/UserContext'
import { GET_USER } from '../../helpers/query/user'
import { GET_LIST_ANIME } from '../../helpers/query/anime'
import { useQuery } from '@apollo/client'
import { CardAnime, ContainerListAnime } from './styles'
import Pagination from '../../components/pagination'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader'
import { STATUS } from '../../helpers/constants/anime'
import { AnimeListType } from './types'

const AnimeList:FC = () => {
	const navigate = useNavigate()
  const {user, saveUser} = useUserContext()
	const [page, setPage] = useState(1)
	
	useQuery(GET_USER, {
		variables: {id: 5813837}, 
		skip: !!user?.id, 
		onCompleted: (data) => !user?.id && saveUser({...data?.User, collectionList: STATUS})
	});

	const {loading:loadingAnimeList, data:animeList} = useQuery(GET_LIST_ANIME, {variables: {
		page,
		perPage: 10
	}})

	useEffect(() => {
		saveUser({...user, banner: undefined})
	}, [])
	
  return (
		<>
			<ContainerListAnime>
				{!!loadingAnimeList && <Loader />}
				{animeList?.Page.media.map((value:AnimeListType) => (
					<CardAnime onClick={() => navigate(`/list/${value.id}`)}>
						<img src={value?.coverImage.large} alt="banner" />
						<p>{value?.title.english}</p>
					</CardAnime>
				))}
			</ContainerListAnime>
			{
				!loadingAnimeList && 
					<Pagination
						currentPage={animeList?.Page.pageInfo.currentPage}
						hasNextPage={animeList?.Page.pageInfo.hasNextPage}
						onClick={(value:number) => setPage(value)}
					/>
			}
		</>
  )
}

export default AnimeList