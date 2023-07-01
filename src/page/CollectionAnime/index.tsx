/** @jsxImportSource @emotion/react */
import { Column, Row } from "../../components/styles/layout"
import { Button, Input, MenuCollection, Table } from "./styles"
import { H3, Text } from "../../components/styles/text"
import { useUserContext } from "../../context/UserContext"
import { useState } from "react"
import ModalRemove from "../../components/modal/ModalRemove"
import { toCapitalize } from "../../helpers/functions/String"
import { ChosenRemoveType, DataChosenType } from "./types"
import { UserType } from "../../context/types"

const CollectionAnime = () => {
	const {user, saveUser} = useUserContext()
	const [currentCollection, setCurrentCollection] = useState('All')
	const [listCollection, setListCollection] = useState<UserType>(user)
	const [isDeleteModal, setIsDeleteModal] = useState(false)
	const [chosenRemove, setChosenRemove] = useState<ChosenRemoveType>({chosen: "", data:{}})
	const [collectionSelected, setCollectionSelected] = useState<number | undefined>()
	const [isAddCollection, setIsAddCollection] = useState(false)
	const [isOnRemoveCollection, setIsOnRemoveCollection] = useState(false)
	const [inputAddCollection, setInputAddCollection] = useState("")
	const [errorAddCollection, setErrorAddCollection] = useState(false)

	const handleFilterCollection = (value:string) => {
		if(value === "All") {
			setListCollection(user)
		} else {
			let filterCollection = {...user}
			filterCollection = {...filterCollection, collection: {[value]: user.collection[value]}}
			setListCollection(filterCollection ?? []) 
		}
		setCurrentCollection(value)
	}

	const showModalDelete = (chosen:string, data:DataChosenType) => {
		setChosenRemove({chosen, data})
		setIsDeleteModal(true)
	}

	const deleteAnime = () => {
		const chosenCollection = [...user.collection[chosenRemove?.chosen]]
		let filterData = chosenCollection.filter(
			(data) => JSON.stringify(data) !== JSON.stringify(chosenRemove.data)
		) 
		let collectionFilm = {...user.collectionFilm}
		collectionFilm[chosenRemove.data.title as string] = undefined
		const result = {...user, collectionFilm: collectionFilm, collection: {...user.collection, [chosenRemove?.chosen]: filterData}}
		
		saveUser(result)
		setListCollection(result)
		setIsDeleteModal(false)
	}

	const deleteCollection = () => {
		const selected = user?.collectionList[collectionSelected as number]
		console.log('slected ', selected)
		const collectionList = [...user?.collectionList]
		collectionList.splice(collectionSelected as number, 1)
		const result = {...user, collectionList, collection: {...user.collection, [selected]: undefined}}
		saveUser(result as UserType)
		setListCollection(result as UserType)
		setCollectionSelected(undefined)
		setIsOnRemoveCollection(false)
	}

	const addCollection = () => {
		if((user?.collectionList as string[]).includes(toCapitalize(inputAddCollection))) {
			return setErrorAddCollection(true)
		}
		saveUser({...user, collectionList: [...user.collectionList as string[], inputAddCollection]})
		setIsAddCollection(false)
		setErrorAddCollection(false)
	}

  return (
    <Row padding="30px 15% 0 5%">
      
			<Column alignItems="flex-end">
				<Column>

					{/* text list and button edit */}
					<Row justifyContent="space-between" width="100%">
						<Text size={16} color="rgb(146,153,161)" link={true}  margin="0 5px">List</Text>
						<Text 
							size={16} 
							color="rgb(61,180,242)"
							weight={600}
							link={true}
							margin="0 5px"
							onClick={() => setIsOnRemoveCollection(!isOnRemoveCollection)}
						>
							{!isOnRemoveCollection ? "Edit" : "Cancel"}
						</Text>
					</Row>
					
					{/* list Menu */}
					<MenuCollection>
						{
							["All", ...user?.collectionList as string[]].map((value, index) => (
								<Row justifyContent="space-between" gap={30} key={index}>
									<Text 
										color={currentCollection === value ? 'black' : "rgb(146,153,161)"}
										margin="0 0 10px 0"
										link={true}
										onClick={() => handleFilterCollection(value)}
									>
										{value}
									</Text>

									{
										value !== "All" && isOnRemoveCollection ? 
											<img 
												css={{cursor: "pointer"}}
												src="/media/delete-icon.svg" alt="delete-collection"
												onClick={() => setCollectionSelected(index - 1)}
											/> :
											<div></div>
									}
								</Row>
							))
						}

						{/* add collection */}
						<Text size={16} 
							color="rgb(61,180,242)"
							weight={600}
							link={true}
							margin="0 5px"
							onClick={() => {
								setIsAddCollection(!isAddCollection)
								setErrorAddCollection(false)
							}}
						>
							{!isAddCollection ? "+ Add Collection" : "Cancel"}
						</Text>
						{ isAddCollection && 
								<Column alignItems="center">
									<Input 
										onChange={(event) => setInputAddCollection(event.target.value)}
										error={errorAddCollection}
									/>
									{	errorAddCollection && 
											<Text color="red" size={11}>*The collection input is existed !!</Text>
									}
									<Button onClick={addCollection}>Add</Button>
								</Column>

						}
						
					</MenuCollection>
				</Column>
			</Column>

			{/* list collection */}
			<Column flex={2} alignItems="center">
				{listCollection && listCollection?.collection && Object.keys(listCollection?.collection).length > 0 && 
					Object.keys(listCollection?.collection).map((collection, key:number) => (
						listCollection?.collection[collection] && 
						listCollection?.collection[collection].length > 0 && 
						<>
							<H3 key={key}>{collection}</H3>
							<Table key={key}>
								<tr>
									<th>Title</th>
									<th>Score</th>
									<th>Episode</th>
									<th>Remove</th>
								</tr>
								{
									listCollection && listCollection?.collection[collection] &&  
									listCollection?.collection[collection].map((data) => (
										<tr>
											<td style={{display: "flex", alignItems:"center", width: "100%", gap: 20}}>
												<img width={30} height={40} src={data?.cover ?? ""} /> 
												<span>{data?.title}</span>
											</td>
											<td>{data?.score}</td>
											<td>{data?.episode}</td>
											<td>
												<img
													onClick={() => showModalDelete(collection, data as DataChosenType)}
													height={20}
													width={15}
													src="/media/delete-icon.svg" alt="delete-icon"
												/>
											</td>
										</tr>
									))
								}
							</Table>
						</>
				))}
			</Column>

			{/* popup delete anime */}
			{	isDeleteModal && 
					<ModalRemove onCancel={() => setIsDeleteModal(false)} onDelete={deleteAnime}/>
			}

			{/* popup delete collection */}
			{ collectionSelected !== undefined && 
					<ModalRemove onCancel={() => setCollectionSelected(undefined)} onDelete={deleteCollection}/>
			}
    </Row>
  )
}

export default CollectionAnime