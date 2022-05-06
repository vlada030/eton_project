import styled from "styled-components";
import {useDispatch} from 'react-redux'
import {Button} from '.'
import {formatPrice} from '../utils/handleItemPrice'
import { cartActions } from "../store/cart_slice";
import { globalActions } from "../store/global_slice";

function ProductItem(item) {
    const { image, title, price, description } = item;
    const dispatch = useDispatch()
    const addItemToCart = () => {
        dispatch(cartActions.addItemToCart(item))
        dispatch(globalActions.handleIsModalMsgOpen(true))
        dispatch(globalActions.handleModalMsgText('Added to cart!'))
    }

    return <Card>
        <div className="card-header">
            <img src={image} alt={title} className="card-image"/>
        </div>
        <div className="card-body">
            <div>
                <div className="card-title">
                    <h3>{title}</h3>
                    <h3 className="card-price">{formatPrice(price)}$</h3>
                </div>
                <div className="card-description">{description}</div>
            </div>
            <Button caption="Add to Cart" color="var(--color-pink-300)" handleClick={() => addItemToCart(item)}/>
        </div>
    </Card>;
}

const Card = styled.article`
    width: 292px;
    height: 372px;
    background-color: var(--color-white-100);
    border-radius: var(--border-radius-10);

    box-shadow: 0px 2px 18px rgba(42, 52, 163, 0.07);
    overflow: hidden;

    .card-header {
        width: 100%;
        height: 176px;
    }

    .card-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-body {
        height: calc(100% - 176px);
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    .card-title h3 {
        font-size: 22px;
        line-height: 27px;
        color: var(--color-gray-700);
    }

    .card-title .card-price {
        color: var(--color-blue-650);
    }

    .card-description {
        font-size: 16px;
        line-height: 19px;
        color: var(--color-gray-700);
    }
`;

export default ProductItem;
