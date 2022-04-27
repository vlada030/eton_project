import { useEffect } from "react";
import styled from "styled-components";
import {ScrollToTopButton} from '../components'

function ContentWrapper({ children }) {

    useEffect(() => {

    }, [])
    return (
        <Wrapper id="scroll-element">
            <div className="wrapper">{children}</div>
            <ScrollToTopButton />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: calc(100vh - 82px);
    overflow-y: auto;
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

    .wrapper {
        width: 90%;
        max-width: 960px;
        margin: 0 auto;
        padding: 77px 0;
    }
`;

export default ContentWrapper;
