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
    height: 400px;
    right: 0px;
    gap: 20px;
    width: 60%;
    max-width: 400px;
    background-color: var(--secondary-white);

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
                height: 50px;
                object-fit: cover;
                border-radius: 100%;
                border: 2.5px solid var(--foreground-color);
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
            
        }

    }

    .user-status{
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 70%;
        height: 70px;
        gap: 7px;
        border-bottom: 3px solid var(--background-color);
        div{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 50px;
            gap: 10px;
        } 
        span{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-style: italic;
            font-size: 14px;
        }
        button{
            margin-bottom: 20px;
            background-color: var(--background-color);
            color: #ffff;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 11px;
        }   
    }

    .user-edit, .user-logout{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 50px;
        gap: 10px;
        border-bottom: 3px solid var(--background-color); 
    }

`