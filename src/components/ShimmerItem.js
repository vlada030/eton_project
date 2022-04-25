import styled from "styled-components";

function ShimmerItem({ height, width }) {
    return <Wrapper style={{ height: height, width: width }}></Wrapper>;
}

const Wrapper = styled.div`
    background-image: linear-gradient(
        to right,
        #ccc 0%,
        #ccc 40%,
        #dddddd 50%,
        #dddddd 55%,
        #ccc 65%,
        #ccc 100%
    );

    background-size: 400%;
    border-radius: var(--border-radius-10);
    animation: shimmer 1500ms infinite;

    @keyframes shimmer {
        from {
            background-position: 100% 100%;
        }
        to {
            background-position: 0 0;
        }
    }
`;

export default ShimmerItem;
