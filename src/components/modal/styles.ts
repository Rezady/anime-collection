import styled from '@emotion/styled'

export const ContainerModal = styled.div({
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    animation: "in .25s ease-in-out"
})

export const Modal = styled.div({
    background: "#fafafa",
    borderRadius: 8,
    boxShadow: "0 2px 33px rgba(0,0,0,.48)",
    '& select': {
        background: "rgb(237,241,245)",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer",
        outline: "none"
    }},
    ({width, height}: {width?:number | string, height?: number | string}) => ({
        width: width ?? "50%",
        height: height ?? "70%",
    })
)

export const HeaderModal = styled.header(
    {
        height: "35%",
        backgroundSize: "cover",
        backgroundPosition: "50% 35%",
        backgroundRepeat: "no-repeat",
        position: "relative"
    },
)

export const BannerImage = styled.img({
    height: "100%",
    width: "100%",
    zIndex: 0,
    opacity: "0.7"
})

export const CoverImage = styled.img({
    position: "absolute",
    left: "8%",
    bottom: -50
})

export const Title = styled.p({
    fontSize: "1.6rem",
    color: "white",
    position: 'absolute',
    left: "25%",
    bottom: 0
})

export const ButtonSave = styled.div({
    position: "absolute",
    right: "5%",
    bottom: 0,
    background: "rgb(61,180,242)",
    borderRadius: 3,
    color: "white",
    cursor: "pointer",
    fontSize: "1.1rem",
    marginBottom: "15px",
    padding: "8px 14px",
    width: "fit-content",
    '&:active': {
        transform: "translate(1px, 1px)"
    }
})

export const IconClose = styled.img({
    position: 'absolute',
    top: 20,
    right: "5%",
    cursor: "pointer",
    '&:hover': {
        color: "rgba(0, 0, 0, 1)",
    },
    '&:active': {
        opacity: "0.6",
        transform: "translate(1px, 1px)"
    }
})

export const Button = styled.button(
    {
        padding: 10,
        color: "white",
        borderRadius: 5,
        border: "none",
        outline: "none",
        cursor: "pointer",
        '&:active' : {
            opacity: "0.7",
            transform: "translate(1px, 1px)"
        }
    },
    ({background}:{background:string}) => ({
        background,
    })
)