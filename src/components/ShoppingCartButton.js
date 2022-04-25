import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

import {useGlobalContext} from '../context/global_context'

function ShoppingCartButton({count}) {

    const {handleCartPreview} = useGlobalContext()

    return (
        <Wrapper onClick={() => handleCartPreview()}>
            <FaShoppingCart className="cart-icon" />
            <p className="cart-number">
                <span>{count}</span>
            </p>
        </Wrapper>
    );
}

const Wrapper = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    .cart-icon {
        width: 25px;
        height: auto;
        color: var(--color-white-100);
    }

    .cart-number {
        position: absolute;
        top: 0px;
        right: -5px;
        width: 14px;
        height: 14px;
        background-color: var(--color-blue-700);
        border-radius: 50%;
        
        outline: 2px solid var(--color-pink-300);
    }

    .cart-number > span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 9px;
        line-height: 11px;
        color: var(--color-white-100);
    }

    @media screen and (min-width: 768px) {
        .cart-icon {
            width: 35px;
        }
    }
`;

export default ShoppingCartButton