import styled from "styled-components";

function Button({caption, color, handleClick = function() {}}) {
    return (
        <Wrapper style={{backgroundColor: color}} onClick={handleClick}>
            {caption}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    display: block;
    width: 100%;

    border: 0;
    border-radius: var(--border-radius-4);

    font-size: 16px;
    line-height: 19px;
    color: var(--color-white-100);

    cursor: pointer;
    padding: 9px 0;

    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export default Button;
