import styled from "styled-components";
import { Button } from "../components/.";
import { useNavigate } from "react-router-dom";

function ErrorPage({ message }) {
    let navigate = useNavigate();

    const handleReloadButton = () => {
        navigate(0);
    };

    return (
        <Wrapper>
            <h2>Error ... 🙄🤷‍♀️</h2>
            <h2>{message}</h2>
            <Button
                caption="Reload"
                color="var(--color-pink-300)"
                handleClick={() => handleReloadButton()}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    margin-top: 10rem;

    h2 {
        font-size: 32px;
        color: var(--color-gray-700);
        margin-bottom: 50px;
    }
`;

export default ErrorPage;
