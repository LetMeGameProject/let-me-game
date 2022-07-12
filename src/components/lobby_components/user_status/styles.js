import styled from "styled-components"


export const DivStyled = styled.div`
    width: 100%;
    max-width: 400px;
    background-color: var(--primary-white);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .div-game-name{
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
            font-size: 17px;
            font-weight: 500;
            span{
                font-size: 17px;
                font-weight: bold;
            }
        }
    }

    .div-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .btn-yes, .btn-no{
            padding: 8px 20px;
            border-radius: 4px;
            background-color: var(--background-color);
            color: white;
            transition: .3s;
        }
        .btn-yes{
            :hover{
                background-color: var(--foreground-color);
            }
        }
        .btn-no{
            :hover{
                background-color: black;
            }
        }
    }
`