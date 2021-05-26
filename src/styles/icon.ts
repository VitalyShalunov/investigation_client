import { css } from "styled-components";

export const Icon = (name: string) => css`
    background-image: url('${name}');
`;

export const CreateIcon = (name: string, size: number = 16) => css`
    ${Icon(name)};
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;