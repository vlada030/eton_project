import styled from 'styled-components'
import {useFilterContext} from '../context/filter_context'
import {BsSortUpAlt, BsSortUp} from 'react-icons/bs'

function SortButton() {

    const {ascendingSort, handleSortingOrder} = useFilterContext()

    return (
        <Wrapper onClick={() => handleSortingOrder()}>
            {ascendingSort ? <BsSortUpAlt /> : <BsSortUp />}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    border: 0;
    box-shadow: 0px 2px 18px rgba(42, 52, 163, 0.07);
    cursor: pointer;
    
    display: grid;
    place-content: center;
    
    svg {
        width: 30px;
        height: auto;
        color: var(--color-gray-700);
        transition: var(--transition);
    }

    &:hover svg {
        color: var(--color-pink-300);
    }
`;

export default SortButton