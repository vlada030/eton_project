import styled from "styled-components"
import {useGlobalContext} from '../context/global_context'
import {CartPreviewList, Button} from '.'



function CartPreviewPanel() {

    const {isCartOpen} = useGlobalContext()

    return (
        <Wrapper className={isCartOpen ? "" : "hide"}>
            <CartPreviewList />

            <Button caption="Go to Checkout" color="var(--color-blue-600)" />
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

    @media screen and (min-width: 640px) {
        width: auto;
    }

    @media screen and (min-width: 768px) {
        right: -8px;

        &:after {
            right: 14px;
        }
    }
`;

export default CartPreviewPanel;