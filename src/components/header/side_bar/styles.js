import styled, {css} from "styled-components"

const medias = [
    {
        break: 320,
        flexDirection: "column",
        alignItems: "center",
    },
    {
        break: 768,
        flexDirection: "row",
        alignItems: "flex-start",
    },
]

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 80px;
    align-items: center;
    height:calc(100% - 80px);
    right: 0px;
    gap: 30px;
    width: 60%;
    max-width: 400px;
    background-color: var(--background-white);

    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            flex-direction: ${media.flexDirection}
        }`)}

        .user-img{

            display: flex;
            justify-content: center;
            align-items: center;

            width: 20%;

            img{
                width:50px;
                border-radius: 100%;
            }
        }

        .user-info{
            
            flex-direction: column;
            display: flex;
            gap: 8px;
            justify-content: center;
            

            ${medias.map(media => css`
            @media(min-width: ${media.break}px){
                align-items: ${media.alignItems}
            }`)}
            
            progress{
                height: 10px;
                background-color: #DFC640;
                border-radius: 4px
            }
            progress::-webkit-progress-bar {
                background-color: var(--background-black);
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
                border-bottom-left-radius: 4px;
                border-top-left-radius: 4px;
            }
            progress::-webkit-progress-value {
                background-color: #DFC640;
                border-bottom-left-radius: 2px;
                border-top-left-radius: 2px;
                border-bottom-right-radius: 2px;
                border-top-right-radius: 2px;
            }
        }

    }

    .user-edit, .user-message, .user-logout{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 50px;
        gap: 10px;
        border-bottom: 3px solid var(--background-black); 
    }

`