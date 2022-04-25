import styled from "styled-components"
import { CartPreviewItem } from "."

function CartPreviewList() {
    return (
        <Wrapper>
            <li>
                <CartPreviewItem link="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max" name="Shop Item 1"/>
            </li>
            <li>
                <CartPreviewItem link="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max" name="Shop Item 1"/>
            </li>
            <li>
                <CartPreviewItem link="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max" name="Shop Item 1"/>
            </li>
            <li>
                <CartPreviewItem link="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max" name="Shop Item 1"/>
            </li>
            
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    list-style: none;
    max-height: 185px;
    overflow-y: scroll;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        scrollbar-width: thin;
    }

    li {
        width: 60vw;
        height: 50px;
        margin: 0 auto;
        margin-bottom: 18px;
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

export default CartPreviewList