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
        width: 90%;
        margin-top: 20px;
        display:flex;
        gap:10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        label{
            align-self: flex-start;
            font-size: 14px;
            margin-bottom: -5px
        }

        input, textarea{
            width: 100%;
            height: 30px;
            border-radius: 4px;
            border: none;
            padding: 20px;
            background-color: var(--background-color);
            color: white;
            &::placeholder{
                color: grey;
            }

        }

        textarea{
            height: 120px;
            font-family: 'Inter', sans-serif;
            resize: none;
        }
    }

    .div-checkbox{
        width: 90%;
        border-radius: 4px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--background-color);
        color: var(--primary-white);

        input{
            height: 25px; 
            padding: 0px 3px;
            border-radius: 4px;
            border: none;
            background-color: var(--primary-white);
            color: var(--background-color);
            &::placeholder{
                color: grey;
            }
        }


        div{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 10px;
            color: var(--primary-white);
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