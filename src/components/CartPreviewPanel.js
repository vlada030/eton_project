import styled from "styled-components";
import { useGlobalContext } from "../context/global_context";
import { useProductsContext } from "../context/products_context";
import { CartPreviewList, Button } from ".";
import { Fragment } from "react";
import {useNavigate} from 'react-router-dom'

function CartPreviewPanel() {
    const { isCartOpen, handleCartPreview, handleActiveMenuItem } = useGlobalContext();
    const { cart } = useProductsContext();
    let navigate = useNavigate()

    const openCartList = () => {
        handleCartPreview();
        handleActiveMenuItem('')         
        navigate('cart');
    }

    return (
        <Wrapper className={isCartOpen ? "" : "hide"}>
            {cart.length !== 0 && (
                <Fragment>
                    <CartPreviewList />

                    <Button
                        caption="Go to Checkout"
                        color="var(--color-blue-600)"
                        handleClick={() => openCartList()}
                    />
                </Fragment>
            )}

            {cart.length === 0 && (
                <div className="empty">
                    <p>Your Cart is Empty</p>
                </div>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    top: 42px;
    right: -70px;

    width: calc(90vw);
    // height: 246px;
    // width: 256px;
    background-color: orange;
    background-color: var(--color-white-100);
    border-radius: var(--border-radius-10);
    box-shadow: 0px 2px 18px rgba(42, 52, 163, 0.07);

    opacity: 1;
    visibility: visible;
    transition: var(--transition);

    padding: 18px 16px 16px 16px;

    z-index: 200;

    &:after {
        content: "";
        border: 8px solid transparent;
        border-bottom: 8px solid var(--color-white-100);
        position: absolute;
        top: -16px;
        right: 71px;
    }

    &.hide {
        opacity: 0;
        visibility: hidden;
        // pointer-events: none;
    }

    .empty {
        width: 60vw;
        height: 50px;
        margin: 0 auto;
        margin-bottom: 17px;
        border-bottom: var(--border-bottom);
    }

    .empty {
        display: grid;
        place-content: center;
        font-size: 20px;
    }

    @media screen and (min-width: 640px) {
        width: auto;

        .empty {
            width: 214px;
        }
    }

    @media screen and (min-width: 768px) {
        right: -8px;

        &:after {
            right: 14px;
        }
    }
`;

export default CartPreviewPanel;
