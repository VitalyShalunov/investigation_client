import styled from 'styled-components';
import { DeleteIconData } from '../img/delete';
import { EditIconData } from '../img/edit';
import { CreateIcon } from './icon';

export const UsersPage = styled.div`
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

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: vertical;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 10px;
`;

export const EditIcon = styled.div`
    ${CreateIcon(EditIconData, 16)}
`;

export const DeleteIcon = styled.div`
    ${CreateIcon(DeleteIconData, 16)}
`;

export const UsersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
`;

export const CardUser = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    vertical-align: middle;
    background-color: #EDFAFF;
    height: 150px;
    width: 150px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        margin: 0;
        margin-top: 7px;
        position: relative;
    }
`;

export const DefinedUser = styled.div`
    margin-left: auto;
    margin-right: 30px;
    margin-top: 130px;

    padding-right: 30px;
    padding-left: 30px;

    max-width: 75%;
    margin:auto;
    text-align: center;
    background-color: #EDFAFF;
    height: 70%;
    width: 80%;
    justify-content: center;
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

export const Button = styled.button`
    width: 60px;
    height: 35px;
    cursor: pointer;
`;
