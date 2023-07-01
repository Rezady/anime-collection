import styled from '@emotion/styled'

export const MenuCollection = styled.div({
    background: "white",
    borderRadius: 6,
    padding: '10px 25px 10px 25px',
    boxShadow: '0px 2px 8px -2px rgba(20, 38, 86, 0.16)',
})

export const Table = styled.table({
    width: "80%",
    textAlign: "center",
    borderCollapse: "collapse",
    marginBottom: 30,
    background: "white",
    borderRadius: 5,
    boxShadow: '0px 2px 8px -2px rgba(20, 38, 86, 0.16)',
    '& tr td': {
        cursor: "pointer"
    },
    '& th, & td': {
        width: "33%",
        padding: "10px",
        color: "rgb(92,114,138)",
    }
})

export const Input = styled.input(
    {
        borderRadius: 5,
        padding: 8,
        marginTop: 10,
        outline: "none",
        color: "gray"
    },
    ({error}: {error?:boolean}) => ({
        border: error ? "red 1px solid" : "#bebebe 1px solid"
    })
)

export const Button = styled.button({
    padding: 10,
    border: "none",
    outline: "none",
    background: "rgb(61,180,242)",
    width: "70%",
    borderRadius: 5,
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    '&:active': {
        opacity: "0.7",
        transform: "translate(1px, 1px)"
    }
}) 