import { textPrimaryColor, textSecondaryColor } from '../../constants/colors.js';
import backgroundImg from "../../images/background/background.png";
import styled from 'styled-components';


export default function ContainerMenuItems({ title, subtitle, isBurger, children }) {
    return (
        <StyledProducts>
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <div>{children}</div>
        </StyledProducts>
    );
}

ContainerMenuItems.defaultProps = {
    subtitle: "",
    isBurger: true
}

const StyledProducts = styled.div`
    background-image: url(${backgroundImg});
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    margin-top: -3px;
    padding-top: 15px;
    padding-left: 15px;
    
    h1 {
        color: ${textPrimaryColor};
        font-size: 2em;
        font-weight: 700;
        text-decoration: underline;
        margin-bottom: 10px;
    }

    h2 {
        color: ${textSecondaryColor};
        font-size: 1.5em;
        font-weight: 600;
    }

    &>div {
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`;