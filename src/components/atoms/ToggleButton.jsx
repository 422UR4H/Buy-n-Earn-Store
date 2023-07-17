import React from 'react';
import { styled } from 'styled-components';
import { mainColorButton } from '../../constants/colors.js';

export default function ToggleButton({ children, onClick, isSelected, setIsSelected }) {
    return (
        <StyledToggle $isSelected={isSelected} onClick={onClick}>
            {children}
        </StyledToggle>
    );
}

const StyledToggle = styled.button`
    background-color: ${({ $isSelected }) => $isSelected ? mainColorButton : "black"};
    color: ${({ $isSelected }) => $isSelected ? "black" : mainColorButton};
    text-align: center;
    font-size: 0.9em;
    font-weight: 600;
    padding: 2px;
    border: 2px solid ${mainColorButton};
    border-radius: 10px;
`;