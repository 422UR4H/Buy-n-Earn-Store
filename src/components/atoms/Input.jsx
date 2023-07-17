import React from 'react';
import { styled } from 'styled-components';
import { mainContrastColor, textPrimaryColor } from '../../constants/colors.js';

export default function Input({ children }) {
    return (
        <div>{children}</div>
    );
}

const StyledInput = styled.input`
    background-color: ${mainContrastColor};
    color: ${textPrimaryColor};
    border: none;
    border-radius: 5px;
`;