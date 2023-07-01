import styled from '@emotion/styled'

export const ContainerDetail = styled.div({
    background: "#f5f5f5",
    display: "flex",
    padding: "30px 15%",
    gap: 30
})

export const TitleAnime = styled.h1({
    color: "rgb(92,114,138)",
    margin: 0,
    marginBottom: 10
})

export const ButtonAdd = styled.button({
    backgroundColor: "rgb(61,180,242)",
    color: "white",
    marginTop: 15,
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    outline: 'none',
    '&:active': {
        transform: 'translate(1px, 1px)',
        opacity: '0.7'
    }
})