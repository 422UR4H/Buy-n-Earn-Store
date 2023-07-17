import React from 'react'
import { styled } from 'styled-components'
import { mainColorButton } from '../../constants/colors.js'

export default function Count({ onClick, children }) {
    return (
        <StyledCount onClick={onClick}>{children}</StyledCount>
    );
}

const StyledCount = styled.button`
    background-color: ${mainColorButton};
    color: black;
    font-size: 1.25em;
    text-align: center;
    font-weight: 900;

    width: 34px;
    height: 34px;
    padding-top: 3px;
    border: 3px solid black;
    border-radius: 50%;
`;