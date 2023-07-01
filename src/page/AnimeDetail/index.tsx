import { useQuery } from "@apollo/client"
import { GET_ANIME_DETAIL, GET_COLLECTION } from "../../helpers/query/anime"
import { useParams } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"
import { useEffect, useState } from "react"
import { ButtonAdd, ContainerDetail, TitleAnime } from "./styles"
import Loader from "../../components/loader"
import AddCollection from "../../components/modal/AddCollection"
import { Text } from "../../components/styles/text"

const AnimeDetail = () => {
	const {user, saveUser} = useUserContext()
	const params = useParams()
	const [isModalCollection, setIsModalCollection] = useState(false)
	const {data, loading} = useQuery(GET_ANIME_DETAIL, {
		variables:{id: params.id},
		onCompleted: (data) => saveUser({...user, banner: data?.Media.bannerImage})
	})

	const {data: collectionData} = useQuery(GET_COLLECTION, {
		variables: {userId: 5813837}
	})
	
	if(loading) return <Loader />

  return (
    <ContainerDetail>
			<div>
				<img src={data?.Media.coverImage.medium} alt="cover-image" />
				{
					user?.collectionFilm && user?.collectionFilm[data?.Media.title.english] ? 
						<p>Status: 
							<Text link={true} size={14} color="#1c439b">{user?.collectionFilm[data?.Media.title.english]?.status}</Text>
						</p> : 
						<ButtonAdd onClick={() => setIsModalCollection(true)}>Add to list</ButtonAdd>
				}
			</div>
			<div>
				<TitleAnime>{data?.Media.title.english}</TitleAnime>
				<Text color="rgb(92,114,138)" size={16}>{data?.Media.description}</Text>
			</div>
			{
			isModalCollection && 
				<AddCollection 
					cover={data?.Media.coverImage.medium}
					title={data?.Media.title.english}
					closeModal={() => setIsModalCollection(false)}
					params={params}
				/>
			}
		</ContainerDetail>
  )
}

export default AnimeDetail