import { FC, useState } from "react"
import { BannerImage, ButtonSave, ContainerModal, HeaderModal, IconClose, Modal, Title } from "./styles"
import { useUserContext } from "../../context/UserContext"
import { Column, Row } from "../styles/layout"
import { CoverImage } from "./styles"
import { H3, Text } from "../styles/text"
import { InputTypes, PropsAddCollection } from "./types"

const score = [1,2,3,4,5]

const AddCollection:FC<PropsAddCollection> = ({cover, title, closeModal, params}) => {
  
  const {user, saveUser} = useUserContext()
  const [input, setInput] = useState<InputTypes>({
    status: "",
    episode: null,
    score: null
  })
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSave = () => {
    const collection = user.collection ?? {[input.status]: []}
    const status = collection[input?.status] ? collection[input?.status] : []
    const {episode, score} = input
    saveUser({
      ...user,
      collection: {
        ...collection,
        [input.status]: [...status, {episode, score, cover, title}],
      },
      collectionFilm: {[title]: {status: input.status}}
    })
    setIsSuccess(true)
    setTimeout(() => {
      closeModal()
    }, 1000)
  }

  return (
    <ContainerModal>
        <Modal>
          <HeaderModal>
            <BannerImage src={user.banner ?? ""} />
            <IconClose src="/media/close.svg" onClick={closeModal}/>
            <CoverImage src={cover} alt="cover-image" />
            <Title>{title}</Title>
            {!isSuccess && <ButtonSave onClick={handleSave}>Save</ButtonSave>}
          </HeaderModal>
          <Row marginTop={70} padding="0 8% 0 8%" justifyContent={isSuccess ? "center" : "space-between"}>
            {
              isSuccess ? 
                <Column alignItems="center">
                  <img src='/media/success-circle.svg' alt="logo-success" />
                  <H3>Anime successfully added</H3>
                </Column>
                :
                <>
                  <Column>
                    <Text size={14} weight={500}>Status</Text>
                    <select onChange={(e) => setInput((prevState:InputTypes) => ({...prevState, status:e.target.value}))}>
                      <option value="" disabled selected>Status</option>
                      {user.collectionList.map((value:string) => (
                        <option
                          value={value}
                        >
                          {value}
                        </option>
                      ))}
                    </select>
                  </Column>
                  
                  <Column>
                    <Text size={14} weight={500}>Score</Text>
                    <select onChange={(e) => setInput((prevState:InputTypes) => ({...prevState, score:parseInt(e.target.value)}))}>
                      <option value="" disabled selected>Score</option>
                      {score.map((value) => (
                        <option value={value}>{value}</option>
                      ))}
                    </select>
                  </Column>
                  
                  <Column>
                    <Text size={14} weight={500}>Episode</Text>
                    <select onChange={(e) => setInput((prevState:InputTypes) => ({...prevState, episode:parseInt(e.target.value)}))}>
                      <option value="" disabled selected>Episode</option>
                      {score.map((value) => (
                        <option value={value}>{value}</option>
                      ))}
                    </select>
                  </Column>
                </>
            }
          </Row>
        </Modal>
    </ContainerModal>
  )
}

export default AddCollection