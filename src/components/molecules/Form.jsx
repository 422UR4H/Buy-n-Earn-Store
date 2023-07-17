import React from 'react';
import { styled } from 'styled-components';
import Button from '../atoms/Button.jsx';

export default function Form({ children, textButton }) {
    return (
        <StyledForm>
            {children}
            <Button>{textButton}</Button>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;