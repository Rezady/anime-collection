import { FC, useEffect, useState } from 'react'
import { ContainerPagination, PaginationComponent, Page } from './styles'
import { PaginationProps } from './types'

const Pagination:FC<PaginationProps> = ({currentPage, hasNextPage, onClick}) => {

	const [orderPage, setOrderPage] = useState<number[]>([1])
	useEffect(() => {
    if (currentPage < 2) {
      if (hasNextPage) {
        setOrderPage([1, 2, 3])
      } else {
        setOrderPage([1])
      }

      return
    }
    if (!hasNextPage) setOrderPage([currentPage - 1, currentPage])
    else {
      setOrderPage([currentPage - 1, currentPage, currentPage + 1])
    }
  }, [currentPage, hasNextPage])

  return (
    <ContainerPagination>
			<PaginationComponent>
				<Page onClick={() => currentPage !== 1 && onClick(currentPage - 1)}>left</Page>
				{orderPage.map(value => (
					<Page
						active={currentPage === value}
						onClick={() => value !== currentPage && onClick(value)}
					>
						{value}
					</Page>
				))}
				<Page onClick={() => hasNextPage && onClick(currentPage + 1)}>right</Page>
			</PaginationComponent>
    </ContainerPagination>
  )
}

export default Pagination