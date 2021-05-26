import styled from "styled-components";

export const SearchInput = styled.input `
    flex-grow: 1;
    height: 36px;
    max-height: 36px;
    padding: 0;
    border: 1px solid #B0B1B1;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-shadow: unset;
    text-align: center;
    margin-bottom: 30px;
    transition: border 0.2s ease;
    &:focus {
        background-color: #EDFAFF;
    }
    &:hover {
        border: 1px solid #000000;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 7px;
    cursor: pointer;
    //background-color: #B9E5FC;
`;