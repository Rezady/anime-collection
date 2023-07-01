import { gql } from "@apollo/client"

export const GET_LIST_ANIME = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
	Page (page: $page, perPage: $perPage) {
		pageInfo {
			total
			currentPage
			lastPage
			hasNextPage
			perPage
		}
		media (id: $id, search: $search) {
			id
			title {
				english
			}
			coverImage {
				large
			}
		}
	}
}`

export const GET_ANIME_DETAIL = gql`
query ($id: Int) {
	Media (id: $id) {
		id
		title {
			english
		}
		bannerImage
		description
		coverImage {
			medium
		}
		status
		chapters
		popularity
		isFavourite
		rankings {
			id
			rank
		}
	}
}`

export const GET_COLLECTION = gql`
	query($userId: Int) {
		MediaListCollection(userId: $userId, type: ANIME) {
			lists {
				name
			}
		}
	}
`
