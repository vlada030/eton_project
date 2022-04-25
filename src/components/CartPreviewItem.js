import styled from "styled-components";

function CartPreviewItem({ link, name }) {
    return (
        <Wrapper className="cart-item">
            <img className="cart-img" src={link} alt={name} />
            <h3 className="cart-title">{name}</h3>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    display: flex;
    align-items: center;

    .cart-img {
        width: 51px;
        height: 31px;
        object-fit: cover;
        border-radius: var(--border-radius-5);
        margin-right: 13px;
    }

    .cart-title {
        font-size: 16px;
        line-height: 19px;
        color: var(--color-gray-700);
    }
`;

export default CartPreviewItem;
