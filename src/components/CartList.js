import styled from 'styled-components'
import {useProductsContext} from '../context/products_context'
import {CartItem, Button} from '.'
import {formatPrice, sumTotalCartPrice} from '../utils/handleItemPrice'
import {useNavigate} from 'react-router-dom'

function CartList() {

    const {cart, handleDeleteCart} = useProductsContext()
    let navigate = useNavigate()

    const totalPrice = sumTotalCartPrice(cart)

    const handleBackToShop = () => {
        navigate('../shop')
    }

    return (
        <Wrapper>
            {cart.map((item, index) => {
                return (
                    <li key={index}>
                        <CartItem item={item}/>
                    </li>
                );
            })}
            <div className="total-wrapper">
                <h3 className="total-title">Total</h3>
                <p className="total-price">{formatPrice(totalPrice)}$</p>
            </div>

            <div className="btn-wrapper">
                <Button
                    caption="Empty Cart"
                    color="var(--color-pink-300)"
                    handleClick={() => handleDeleteCart()}
                />

                <Button caption="Back to Shop" color="var(--color-pink-300)" handleClick={() => handleBackToShop()} />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    list-style: none;

    li {
        border-bottom: var(--border-bottom);
        padding-bottom: 22px;
        margin-bottom: 23px;
    }

    .total-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .total-title {
        font-size: 32px;
        color: var(--color-gray-700);
        line-height: 39px;
    }

    .total-price {
        font-size: 32px;
        font-weight: 700;
        color: var(--color-blue-650);
        line-height: 39px;
    }

    .btn-wrapper > button:first-child {
        margin-bottom: 23px;
    }

    @media screen and (min-width: 640px) {
        .btn-wrapper {
            width: 60%;
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 768px) {
        .total-wrapper {
            margin-bottom: 50px;
        }
    }

    @media screen and (min-width: 1024px) {

        .btn-wrapper {
            width: 30%;
        }        
    }
`;

export default CartList;