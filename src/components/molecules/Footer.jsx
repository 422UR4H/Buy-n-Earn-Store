import React from 'react';
import { styled } from 'styled-components';
import Button from '../atoms/Button.jsx';
import backgroundImg from "../../images/background/background.png";

export default function Footer({ textButton, onClick }) {
    return (
        <StyledFooter>
            <Button onClick={onClick}>{textButton}</Button>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-image: url(${backgroundImg});
    background-color: rgba(0, 0, 0, 0.94);
    background-blend-mode: multiply;
    width: 100vw;
    height: 60px;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 4;
`;