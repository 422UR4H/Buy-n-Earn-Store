import React from 'react';
import { styled } from 'styled-components';
import { mainColorButton, textTernaryColor } from '../../constants/colors.js';

export default function Button({ children, onClick }) {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background-color: ${mainColorButton};
    color: ${textTernaryColor};
    font-size: 1.2em;
    font-weight: 700;
    padding-inline: 10px;
    padding-block: 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 0 3px black inset, 0 0 0 1.7px ${mainColorButton};
`;