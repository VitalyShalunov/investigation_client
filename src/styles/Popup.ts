import styled from "styled-components";

export const PlusPopup = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #8080808f;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
    position: absolute;
    top: 92%;
    right: 10px;
`;

export const PopupWindow = styled.div`
    position: fixed;  
    display: flex;
    width: 100%;  
    height: 100%;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    margin: auto;  
    background-color: rgba(0,0,0, 0.5);  
`;


export const InnerPopup = styled.div`  
    margin-top: 20%;
    max-width: 70%;
    padding-bottom: 30px;
    left: 20%;  
    right: 20%;  
    top: 20%;  
    bottom: 20%;  
    margin: auto;  
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background: white;  
    display: grid;
`;

export const Button = styled.button`
    width: 60px;
    height: 35px;
    cursor: pointer;
`;
