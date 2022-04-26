import styled from "styled-components";
import { CartPreviewItem } from ".";
import { useProductsContext } from "../context/products_context";

function CartPreviewList() {
    const { cart } = useProductsContext();

    return (
        <Wrapper>
            {cart.map((item) => {
                return (
                    <li key={item.id}>
                        <CartPreviewItem
                            link={item.image}
                            name={item.title}
                            count={item.count}
                        />
                    </li>
                );
            })}
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    list-style: none;
    max-height: 185px;
    overflow-y: auto;

    // scrollbar-width: thin;
    // scrollbar-gutter: stable;

    // &::-webkit-scrollbar {
    //     scrollbar-width: none;
    // }

    /* Works on Firefox */

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

    li {
        width: 60vw;
        height: 50px;
        margin: 0 auto;
        margin-bottom: 17px;
        border-bottom: var(--border-bottom);
    }

    li:last-child {
        border-bottom: transparent;
        margin-bottom: 0;
    }

    @media screen and (min-width: 640px) {
        li {
            width: 214px;
        }
    }
`;

export default CartPreviewList;
