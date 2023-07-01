import styled from '@emotion/styled'

export const ContainerListAnime = styled.div(
    {   
        padding: "30px 30px",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: 5,
        gap: 30,
        justifyContent: "center",
    }
)

export const CardAnime = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        height: 320,
        borderRadius: 8,
        background: "white",
        padding: "15px 10px",
        cursor: "pointer",
        boxShadow: '0px 2px 8px -2px rgba(20, 38, 86, 0.16)',
        '&:hover': {
            transform: 'translate(-2px, -2px)'
        },
        '&:active': {
            transform: 'translate(2px, 2px)'
        },
        '& > img': {
            width: 250,
            height: 250
        },
        '& > p': {
            textAlign: "center",
            fontWeight: 600,
            fontSize: 16,
            color: "#1e1e1e"
        }
    }
)