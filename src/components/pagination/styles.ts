
import styled from '@emotion/styled'

export const ContainerPagination = styled.div({
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 30px",
    cursor: "pointer",
    marginBottom: 40
})

export const PaginationComponent = styled.div({
    display: "flex",
    gap: 5,
    padding: 10
}) 

export const Page = styled.div({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2E4885",
        width:  32,
        height: 32,
        borderRadius: 8,
        fontWeight: 400,
        fontSize: 14,
    },
    ({active}: {active?:boolean}) => ({
        backgroundColor : active ? "#2E4885" : "#d7dce0",
        color: active ? "white" : "#2E4885",
    }),
)