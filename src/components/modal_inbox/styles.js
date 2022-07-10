import styled from "styled-components"

export const Button = styled.button`
    width: 55px;
    height: 55px;
    position: fixed;
    bottom: 20px;
    right: 20px;
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

`
export const DivModal = styled.div `
    width:  ${({modal})=> modal ? "90%" : "0%"};
    max-width: ${({modal})=> modal ? "800px" : "0px"};
    min-height: ${({modal})=> modal ? "300px" : "0px"};
    height: ${({modal})=> modal ? "400px" : "0px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: ${({modal})=> modal ? "fixed" : "unset"};
    gap: 20px;
    top: 50%;
    left: 50%;
    z-index: ${({modal})=> modal ? "1001" : "0"};
    transform: translate(-50%, -50%);
    
`