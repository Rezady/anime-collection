export interface UserType {
    id: number
    name: string
    collectionList : string[]
    banner?: null | string | undefined
    collection: {
        [index:string]: {
            episode?: number | null
            score?: number | null
            cover?: string 
            title?: string
        }[]
    },
    collectionFilm?: {
        [index: string]: {
            status?: string
        } | undefined
    }
}

export interface InitialContext {user: UserType, saveUser:(user:UserType) => void}