export interface PropsAddCollection {
    cover:string
    title:string
    closeModal: () => void
    params: {id?:number}
}

export interface InputTypes {
    status:string
    episode: number | null
    score: number | null
}

export interface PropsModalRemove {
    onCancel: () => void
    onDelete: () => void
}