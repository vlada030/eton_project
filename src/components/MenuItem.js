import styled from "styled-components";
import { useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'

function MenuItem({ caption }) {

    const dispatch = useDispatch()
    const handleActiveMenuItem = (item) => {
        dispatch({ type: "SIDEBAR_TOGGLE", payload: item });
    };

    const handleSidebarVisibility = () => {
        dispatch({ type: "SIDEBAR_TOGGLE" });
    };

    let navigate = useNavigate()

    const handleButtonClick = () => {
        handleActiveMenuItem(caption)
        handleSidebarVisibility()
        navigate(caption)
    }

    return (
        <Wrapper onClick={() => handleButtonClick()}>
            {caption}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    background-color: transparent;
    border: 0;
    color: var(--color-white-100);
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;

    transition: var(--transition);
    padding: 0 10px;
`;

export default MenuItem;
