export interface ChosenRemoveType {
    chosen: string,
    data: DataChosenType
}

export interface DataChosenType {
    score?: number
    episode?: number
    title?: string
}