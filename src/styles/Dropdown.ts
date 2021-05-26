import styled from "styled-components";
import Arrow from '../img/arrow';
import { DeleteIconData } from "../img/delete";
import { CreateIcon } from "./icon";

export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

export const ActiveItemContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ItemInput = styled.input`
    text-align: center;
    flex-grow: 1;
`;

export const ItemSpan = styled.span`
    text-align: center;
    flex-grow: 1;
    margin-bottom: 5px;
    background-color: #e0e5ff;
    border-radius: 5px;
    cursor: pointer;
`;

export const ChoosenItemsConteiner = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin-bottom: 10px;
    justify-content: center;
`;

export const ChoosenItem = styled.div`
    display: flex;
    margin-bottom: 5px;
    letter-spacing: 1px;
    span {
        flex: 1;
        float: left
    }
    i {
        ${CreateIcon(DeleteIconData, 8)}
    }
    margin-right: 10px;
`;

export const ArrowIcon = styled.i`
    ${CreateIcon(Arrow, 16)}
    min-width: 16px;
    &.expanded {
        ${CreateIcon(Arrow, 16)};
        transform: rotate(180deg);
    }
`;

export const DropdownList = styled.div`
    display: flex;
    flex-wrap:nowrap;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;
