import { useEffect } from "react";
import styled from "styled-components"
import {useSelector, useDispatch} from 'react-redux'
import { globalActions } from "../store/global_slice";


function ModalMessage() {
    const {isModalMsgOpen, modalMsgText }= useSelector(store => store.global)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isModalMsgOpen) {
            const timer = setTimeout(() => {
                dispatch(globalActions.handleIsModalMsgOpen(false));
            }, 2000);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [isModalMsgOpen]) 

    return (
        <Wrapper className={isModalMsgOpen ? 'show' : ''}>
            <p>{modalMsgText}</p>
        </Wrapper>
    );
}

const Wrapper = styled.aside`
    position: fixed;
    top: 85px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-pink-300);
    border-radius: var(--border-radius-10);
    padding: 9px;

    text-align: center;
    font-size: 16px;
    line-height: 19px;
    color: var(--color-white-100);

    width: 60%;
    max-width: 626px;

    opacity: 0;
    visibility: hidden;
    transition: var(--transition);

    z-index: 50;

    &.show {
        opacity: 1;
        visibility: visible;
    }

    @media screen and (min-width: 1024px) {
        top: 95px;
    }

`;

export default ModalMessage