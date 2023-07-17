import React from 'react';
import bannerURL from "../../images/banners/20x7banner.jpg";
import styled from 'styled-components';

export default function Header() {
    return (
        <StyledHeader src={bannerURL} alt="banner Dream's Burger"></StyledHeader>
    );
}

const StyledHeader = styled.img`
    width: 100vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);
`;