import React from 'react'
import { styled } from 'styled-components';
import { textSecondaryColor } from '../../constants/colors.js';

export default function Logo() {
    return (
        <StyledLogo>Buy'n'Earn</StyledLogo>
    );
}

const StyledLogo = styled.span`
    color: ${textSecondaryColor};
`;