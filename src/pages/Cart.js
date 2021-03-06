import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { CartList } from "../components/.";

function Cart() {
    const { cart } = useProductsContext();

    return (
        <Wrapper>
            <div className="container">
                <h3 className="title">
                    {cart.length === 0 ? "Your Cart is Empty" : "Your Cart"}
                </h3>
                {cart.length !== 0 && <CartList />}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: calc(100vh - 82px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--color-blue-500);

    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-blue-500);
        border-radius: 20px;
        border: 3px solid transparent;
    }

    .container {
        width: 90%;
        max-width: 709px;
        margin: 0 auto;
        padding: 66px 0;
    }

    .title {
        font-size: 30px;
        color: var(--color-gray-700);
        line-height: 37px;
        text-align: center;
        margin-bottom: 65px;
    }
`;

export default Cart;
