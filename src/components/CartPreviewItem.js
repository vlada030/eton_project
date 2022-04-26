import styled from "styled-components";

function CartPreviewItem({ link, name, count }) {
    return (
        <Wrapper className="cart-item">
            <img className="cart-img" src={link} alt={name} />
            <h3 className="cart-title">{name}</h3>
            <p className="cart-count">x{count}</p>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart-img {
        width: 51px;
        height: 31px;
        object-fit: cover;
        border-radius: var(--border-radius-5);
        //margin-right: 13px;
    }

    .cart-title {
        font-size: 16px;
        line-height: 19px;
        color: var(--color-gray-700);
    }

    .cart-count {
        font-size: 26px;
        font-weight: 600;
        line-height: 19px;
        color: var(--color-pink-600);
    }
`;

export default CartPreviewItem;
