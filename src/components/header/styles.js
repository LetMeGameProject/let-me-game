import styled, {css} from "styled-components";


const medias = [
    {
        break: 320,
        widthContent: 90,
        marginLeft: 0,
        marginRight: 0,
    },
    {
        break: 768,
        widthContent: 100,
        marginLeft: 115,
        marginRight: 115,
    },
]

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: var(--primary-white);
    position: fixed;
    z-index: 1001;

`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    ${medias.map(media => css`
       @media(min-width: ${media.break}px){
            width: ${media.widthContent}%
        
        }`)}


    .div-logo{
        img{
          width: 60px;
          
        }
       ${medias.map(media => css`
       @media(min-width: ${media.break}px){
            margin-left: ${media.marginLeft}px
        
        }`)}
    }

   
    .div-img-user{
        display: flex;
        justify-content: center;
        width: 45px;
        height: 45px;
        ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            margin-right: ${media.marginRight}px
        
        }`)}
    }
    
`  