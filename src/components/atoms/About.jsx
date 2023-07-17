import React from 'react'
import styled from 'styled-components';
import bannerURL from "../../images/banners/32x8banner2.png";

export default function About() {
    return (
        <StyledAbout src={bannerURL} alt="banner Dream's Burger"></StyledAbout>
    );
}

const StyledAbout = styled.img`
    width: 100vw;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.6);
`;