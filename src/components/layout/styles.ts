import styled from '@emotion/styled'

export const Container = styled.div(
    {
        minHeight: "100%"
    }
)
export const Header = styled.div(
    {
        minHeight: "35vh",
        backgroundSize: "cover",
        backgroundPosition: "50% 35%",
        backgroundRepeat: "no-repeat"
    },
    ({banner}:{banner?:string}) => ({
        backgroundImage: !!banner ? `url(${banner})` : 'url("https://s4.anilist.co/file/anilistcdn/user/banner/b5813837-9TFFpHntoUsK.jpg")'
    })
)