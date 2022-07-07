import styled from "styled-components"

export const FormStyled = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 90%;
    color: white;
    font-family: 'Inter', sans-serif;

    .div-input{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 10px;
        color: var(--primary-white);
        div{
            width: 99%;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 3px;
            }
        }
    }

    .div-checkbox{
        width: 90%;
        margin-top: -20px;
        border-radius: 4px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color);
        color: var(--primary-white);
        gap: 40px;

        div{
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            color: var(--primary-white);
            div{
                padding: 3px;
            }
            
        }
    }

    .div-btn{
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        gap:20px;
        margin-bottom: 20px;
        font-weight: bold;
        button{
            padding: 8px 30px;
            border-radius: 4px;
        }

        button:first-child{
            background-color: green;
            background-color: var(--primary-white);
        }

        button:last-child{
            background-color: var(--background-color);
            color: white;
        }

    }
`