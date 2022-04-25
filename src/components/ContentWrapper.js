import styled from "styled-components";
function ContentWrapper({ children }) {
    return (
        <Wrapper>
            <div className="wrapper">{children}</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: calc(100vh - 82px);
    overflow-y: auto;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        scrollbar-width: thin;
    }

    .wrapper {
        width: 90%;
        max-width: 960px;
        margin: 0 auto;
        padding: 77px 0;
    }
`;

export default ContentWrapper;
