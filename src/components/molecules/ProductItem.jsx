import { useState } from 'react';
import styled from 'styled-components';
import { textPrimaryColor, textSecondaryColor } from '../../constants/colors.js';
import backgroundImg from "../../images/background/background.png";
import ToggleButton from '../atoms/ToggleButton.jsx';
import Count from '../atoms/Count.jsx';
import { useCreateCart } from '../../services/cart.js';


export default function ProductItem({ item }) {
    const [selected, setSelected] = useState(false);
    const [amount, setAmount] = useState(0);
    const { meatOptions, value, type } = item;
    // const isBurger = type === "premium" || type === "classic" || type === "smashes" || type === "tradicional";
    const initialValue = meatOptions?.point ? { weight: null, point: null } : { weight: null };
    const [options, setOptions] = useState(initialValue);

    const isLinkPng = !!item.linkPng;
    const height = isLinkPng ? "120px" : "50px";
    const margin = isLinkPng ? "25px" : "-45px";


    function insertCart(options) {
        setTimeout(() => setOptions(initialValue), 500);
        // insert options in cart collection
        const createCart = useCreateCart();
        const { type, name, value, linkJpg } = item;
        let product = { name, value, linkJpg };

        if (options) {
            const weight = meatOptions.weight[options.weight];
            const point = meatOptions?.point[options.point];
            const value = parseFloat(weight.substring(weight.indexOf("R$ ") + 3).replace(',', '.'));

            if (point) {
                product = { ...product, value, weight, point };
            } else {
                product = { ...product, value, weight };
            }
        } else {
            createCart({ ...product, value });
        }
        createCart(product);
    }

    function handleClickCount() {
        if (!meatOptions) {
            setAmount(amount - 1);
        } else {
            alert("Você só pode editar este item no carrinho!");
        }
    }

    function handleClickProduct({ target }) {
        if (target.nodeName === "BUTTON") {
            return;
        }
        if (meatOptions) {
            setSelected(!selected);
        } else {
            setAmount(amount + 1);
        }
    }

    function handleClickOption(name, i) {
        const { weight, point } = { ...options, [name]: i };
        setOptions({ weight, point });

        if (weight !== null && point !== null) {
            setAmount(amount + 1);
            setTimeout(() => setSelected(false), 500);
            insertCart({ weight, point });
        }
    }

    return (
        <StyledItem $height={height} $margin={margin} $isSelected={selected} $isLinkPng={isLinkPng}>
            <div className="main" onClick={handleClickProduct}>
                {item.linkPng && <img src={item.linkPng} alt={item.name} />}
                <h3>
                    {item.name}
                    {!!value && <span>{"R$" + value.toFixed(2).replace('.', ',')}</span>}
                </h3>
                {item.description !== undefined && <p>{item.description}</p>}
                {amount > 0 && <Count onClick={handleClickCount}>{amount}</Count>}
            </div>
            {meatOptions &&
                <div className="confirm">
                    <div>
                        <h4>{meatOptions.titleWeight}</h4>
                        {meatOptions.weight.map((w, i) =>
                            <ToggleButton key={i}
                                isSelected={i === options.weight}
                                onClick={() => handleClickOption("weight", i)}
                            >
                                {w}
                            </ToggleButton>
                        )}
                    </div>
                    {meatOptions.titlePoint &&
                        <div>
                            <h4>{meatOptions.titlePoint}</h4>
                            {meatOptions.point.map((p, i) =>
                                <ToggleButton key={i}
                                    isSelected={i === options.point}
                                    onClick={() => handleClickOption("point", i)}
                                >
                                    {p}
                                </ToggleButton>
                            )}
                        </div>
                    }
                </div>
            }
        </StyledItem>
    );
}

const StyledItem = styled.div`
    height: 120px;
    width: 90vw;
    margin-bottom: ${({ $margin }) => $margin};

    /* border-top: ${({ $isSelected }) => $isSelected ? "3px solid" + textPrimaryColor : "none"};
    border-bottom: ${({ $isSelected }) => $isSelected ? "3px solid" + textPrimaryColor : "none"};     */

    position: relative;

    .main {
        background-image: url(${backgroundImg});
        background-color: rgba(0, 0, 0, 0.8); 
        background-blend-mode: multiply; 
        height: ${({ $height }) => $height};
        width: calc(100vw - 35px);
        /* margin-bottom: ${({ $margin }) => $margin}; */
        padding-left: ${({ $isLinkPng }) => $isLinkPng ? "121px" : "18px"};
        padding-right: 5px;
        /* padding-block: ${({ $isSelected }) => $isSelected ? "0" : "3px"}; */
        padding-block: 3px;
        border-radius: 50px 0 0 50px;
        position: absolute;
        top: 0;
        right: ${({ $isSelected }) => $isSelected ? "90vw" : "0"};
        z-index: 1;

        button {
            position: absolute;
            top: ${({ $isLinkPng }) => $isLinkPng ? "-10px" : "7px"};
            left: ${({ $isLinkPng }) => $isLinkPng ? "75px" : "-20px"};
            z-index: 3;
        }
    }

    .confirm {
        background-image: url(${backgroundImg});
        background-color: rgba(0, 0, 0, 0.9);
        background-blend-mode: multiply; 

        height: 120px;
        width: inherit;
        padding-block: 7px;
        /* padding-inline: 12px; */
        box-shadow: inset 3px 3px 5px 0px rgba(0, 0, 0, 0.9);

        display: ${({ $isSelected }) => $isSelected ? "flex" : "none"};
        justify-content: space-evenly;

        position: absolute;
        top: 0;
        right: ${({ $isSelected }) => $isSelected ? "0" : "-100%"};
        /* z-index: 1; */

        &>div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }

    img {
        width: 185px;
        position: absolute;
        left: -50px;
        /* top: ${({ $isSelected }) => $isSelected ? "-38px" : "-35px"}; */
        top: -35px;
        z-index: 3;
    }

    h3 {
        color: ${textPrimaryColor};
        font-size: 1.2em;
        font-weight: 700;
        margin-bottom: 5px;

        display: flex;
        justify-content: space-between;
    }

    h4 {
        color: ${textPrimaryColor};
        font-size: 1.2em;
        font-weight: 500;
    }

    p {
        /* background-color: red; */
        display: inline-block;
        height: calc(100% - 1.3em);
        line-height: 100%;
        vertical-align: middle;
        color: ${textSecondaryColor};
        font-size: 0.98em;
        /* font-size: 1em; */
        font-weight: 500;
    }
`;