import styled from "styled-components";
import { formatPrice } from "../utils/handleItemPrice";
import {useProductsContext} from '../context/products_context'

function CartItem({ item }) {
    
    const {handleRemoveItemFromCart} = useProductsContext()

    const { id, image, price, title, description, count } = item;

    return (
        <Wrapper>
            <div className="card-header">
                <div className="card-img">
                    <img src={image} alt={title} />
                </div>
                <div className="card-descr">
                    <div className="card-title">{title}</div>
                    <div className="card-text">{description}</div>
                </div>
            </div>
            <div className="card-body">
                <div className="quantity-wrapper">
                    <h4 className="quantity-text">Quantity</h4>
                    <p className="quantity-number">{count}</p>
                </div>

                <div className="price-wrapper">
                    <p className="price">{formatPrice(price)}$</p>
                    <button
                        className="btn"
                        onClick={() => handleRemoveItemFromCart(id, count)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    max-width: 450px;
    margin: 0 auto;

    .card-header {
        display: flex;
        align-items: center;

        margin-bottom: 20px;
    }

    .card-img {
        height: 67px;
        margin-right: 38px;
        overflow: hidden;
        flex-shrink: 0;
    }

    .card-img img {
        display: inline-block;
        width: 110px;
        height: 67px;
        border-radius: var(--border-radius-5);
        object-fit: cover;
    }

    .card-desc {
    }

    .card-title {
        font-size: 22px;
        color: var(--color-gray-700);
        line-height: 19px;
    }

    .card-text {
        display: none;
    }

    .card-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .quantity-wrapper {
        text-align: center;
    }

    .quantity-text {
        font-size: 16px;
        color: var(--color-gray-700);
        line-height: 19px;
        margin-bottom: 15px;
    }

    .price-wrapper .price,
    .quantity-number {
        font-size: 22px;
        font-weight: 600;
        color: var(--color-gray-700);
        line-height: 27px;

        margin-bottom: 19px;
    }

    .quantity-number {
        margin-bottom: 0;
    }

    .price-wrapper .btn {
        font-size: 16px;
        color: var(--color-red-500);
        line-height: 19px;
        background-color: transparent;
        border: 0;
        cursor: pointer;
        transition: var(--transition);
        padding: 3px 0;

        &:hover {
            color: var(--color-blue-500);
        }
    }

    @media screen and (min-width: 768px) {
        .card-header {
            align-items: start;
            //justify-content: space-between;
        }
        .card-title {
            margin-bottom: 10px;
        }
        .card-text {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: none;

        .card-title {
            font-size: 16px;
            margin-bottom: 18px;
        }

        .card-header {
            margin-bottom: 0;
        }

        .card-descr {
            width: 200px;
        }

        .price-wrapper {
            text-align: right;
        }

        .price-wrapper .price {
            width: 90px;
            margin-bottom: 15px;
        }

        .quantity-wrapper {
            margin-right: 38px;
        }
    }
`;

export default CartItem;
