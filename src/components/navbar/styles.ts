import styled from '@emotion/styled'

export const ContainerMenu = styled.div(
    {
        background: "white",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
)

export const MenuLink = styled.div(
    {   
        display: "flex",
        gap: "30px"
    }
)

export const menu = {
    color: "rgb(122,133,143)",
    fontSize: "1rem",
    cursor: "pointer",
    marginRight: "30px",
    textDecoration: "none",
    fontWeight: 600,
    '&:hover': {
        color: "rgb(61,180,242)",
        transform: "translate(-1px, -1px)"
    },
    '&:active': {
        color: "rgb(61,180,242)",
        opacity: "0.7"
    }
}

export const activeMenu = {
    ...menu,
    color: "rgb(61,180,242)"
}