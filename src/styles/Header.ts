import styled from "styled-components";

export const HeaderContainer = styled.div`
    text-align: right;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-bottom: 20px;
`;

export const HeaderItem = styled.div`
    margin-right: 10px;
    vertical-align: middle;
    border: 1px solid #38A6E3;
    padding: 5px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &.active  {
        background-color: #38a6e35c;
    }
    :hover {
        background-color: #B8E6FF;
    }
`;

export const LogIn = styled.div`
    cursor: pointer;
`;

export const HeaderWrapped = styled.div`
    display:flex;
    justify-content: space-between;
`;