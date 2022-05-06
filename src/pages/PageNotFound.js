import styled from "styled-components";
import { Button } from "../components/.";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { globalActions } from "../store/global_slice";

function NotFound() {
    const dispatch = useDispatch();
    const handleActiveMenuItem = (name) => {
        dispatch(globalActions.handleActiveMenuItem(name));
    };


    const navigate = useNavigate();
    const handleButtonClick = () => {
        handleActiveMenuItem("Shop");
        navigate("shop");
    };

    return (
        <Wrapper>
            <h2>Sorry 🙄🤷‍♀️</h2>
            <h2>404 Page Not Found ...</h2>
            <div className="container">
                <Button
                    caption="Back to Shop"
                    color="var(--color-pink-300)"
                    handleClick={() => handleButtonClick()}
                />
            </div>
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

    .container {
        width: 130px;
        margin: 0 auto;
    }
`;

export default NotFound;
