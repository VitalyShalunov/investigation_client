import styled from "styled-components";

export const InputToggle = styled.input`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: auto;
    font-size: 12px;
    line-height: 1; // межстрочный интервал
    appearance: none;
    border: none;
    padding: 0;
    outline: none; // Параметры рамки
    position: relative !important;
    width: 26px;
    height: 10px;
    margin: 5px !important;
    border-radius: 10px;
    cursor: pointer;
    background-color: #E0E0E0;
    transition: background-color 0.2s ease;
    opacity: 1 !important;

    ::after {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        transform: translate(-2px, -4px); //анимация
        border-radius: 50%;
        background-color: #BDBDBD;
        transition: background-color 0.2s ease, transform 0.3s ease-out; 
        // ease Функция по умолчанию, переход начинается медленно, разгоняется быстро и замедляется в конце
        // ease-out Переход начинается быстро и плавно замедляется в конце
    }

    :checked {
        background-color: #56CCF2;
    }

    :checked::after {
        background-color: #2D9CDB;
        transform: translate(12px, -4px);
    }
`;