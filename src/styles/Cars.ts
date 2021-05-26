import styled from 'styled-components';
import { DeleteIconData } from '../img/delete';
import { EditIconData } from '../img/edit';
import { CreateIcon } from './icon';

export const CarsPage = styled.div`
    flex-shrink: 0; // фактор сжатия flex-элемента
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;  //flex-grow: 1; flex-shrink: 0; flex-basis: auto;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
`;

export const ListAndEditContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    margin-top: 30px; 
`;
export const CarsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const EditContainerWpapped = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    margin-left: 30px;

    input:not(:first-child) {
        margin-top: 30px;
    }
    input {
        border: 1px solid grey;
        text-align: center;
    }
    &.open-edit {
        flex-grow: 0.3;
    }
    transition: flex 1.4s ease;
`;

export const DeleteIcon = styled.i`
    ${CreateIcon(DeleteIconData, 16)}
`;

export const CarItem = styled.div`
    margin-bottom: 30px;
    transition: background 0.2s ease;
    display: flex;
    marging-right: 10px;
    background-color: #2196f321;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        text-transform: uppercase;
        min-height: 50px;

    }
    ${DeleteIcon} {
        flex-grow: 0;
    }
    :hover {
        background: linear-gradient(#ededff5c,#6d78fb59);
    }
`;

export const ActivityButton = styled.div`
    display: flex;
    flex-direction: row;

    input:first-child {
        margin-right: 5px;
    }

    input {
        margin-top: 20px !important;
    }
`;

export const PlusPopup = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: grey;

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
export const AddNewCarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #b0d8fb;
    width: 40%;
    min-width: 300px;
    max-width: 450px;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 72%;
    height: 25%;
    right: 10px;
    
    display: flex;
    flex-direction: column;

    ${DeleteIcon} {
        position: absolute;
        top: 5%;
        right: 10px;
    }
`;

export const Input = styled.input`
    margin-top: 20px;
`;

export const CreateCarBtn = styled.input`
    width: auto;
    margin-top: 15px;
    background-color: #15adfff2;
    border: none;
    border-radius: 5px;
`;