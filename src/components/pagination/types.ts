export interface PaginationProps {
    currentPage: number
    hasNextPage: boolean  
    onClick: (page:number) => void
}