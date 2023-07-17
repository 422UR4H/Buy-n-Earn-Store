import React from 'react';
import { styled } from 'styled-components';
import Header from '../atoms/Header.jsx';
import About from '../atoms/About.jsx';
import Footer from '../molecules/Footer.jsx';
import backgroundImg from "../../images/background/background.png";

export default function MainTemplate({ children, textFooterButton, onClickFooterButton }) {
    return (
        <StyledMain>
            <Header />
            {children}
            <About />
            <Footer textButton={textFooterButton} onClick={onClickFooterButton}/>
        </StyledMain>
    );
}

const StyledMain = styled.div`
    background-color: black;
    margin-bottom: 60px;
    /* background-image: url(${backgroundImg}); */
    /* background-color: rgba(0, 0, 0, 0.5); */
    /* background-size: cover;
    background-repeat: no-repeat; */
    /* background-blend-mode: multiply; */
`;