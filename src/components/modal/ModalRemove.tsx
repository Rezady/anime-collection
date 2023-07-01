import { Button, ContainerModal, Modal } from './styles'
import {  H3, Text } from '../styles/text'
import { Column, Row } from '../styles/layout'
import { FC } from 'react'
import { PropsModalRemove } from './types'

const ModalRemove:FC<PropsModalRemove> = ({onCancel, onDelete}) => {
  return (
    <ContainerModal>
			<Modal height="40%" width="30%">
				<Column justifyContent="center" alignItems="center" height="100%">	
					<img  src='/media/delete-modal.svg' alt="delete-modal" />
					<H3>Are you sure to delete this ?</H3>
					<Column justifySelf="end">
						<Row gap={20} >
							<Button background="#E13F3D" onClick={onCancel}>Cancel</Button>
							<Button background="#1c439b" onClick={onDelete}>Delete</Button>
						</Row>
					</Column>
				</Column>
			</Modal>
    </ContainerModal>
  )
}

export default ModalRemove