import styled from "styled-components"

export const Button = styled.button`
    width: 55px;
    height: 55px;
    position: fixed;
    bottom: 20px;
    right: 10px;
    z-index: 1001;
    border-radius: 100%;
    background-color: var(--primary-white);
`


export const StyledDiv = styled.div`
    width: ${({modal})=> modal ? "100%" : "0%"};
    height: ${({modal})=> modal ? "100%" : "0%"};
    position: ${({modal})=> modal ? "fixed" : "unset"};
    z-index: 1001;
    background-color:${({modal})=> modal ? "rgba(0,0,0,0.60)" : "rgba(0,0,0,0.0)"};
    button{
        position: fixed;
        gap: 20px;
        top: 74%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 6px 20px;
        border-radius: 8px;
        color: var(--background-color);
        background-color: var(--primary-white);
        font-weight: bold;
    }
    div{
        width: 90%;
        max-width: 500px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        gap: 20px;
        top: 50%;
        left: 50%;
        z-index: 1001;
        transform: translate(-50%, -50%);
    }   
    

`