import styled from "styled-components";
import {NavigationLink} from '../components/.'

function NotFound() {
    return (
        <Wrapper>
            <h2>Sorry 🙄🤷‍♀️</h2>
            <h2>404 Page Not Found ...</h2>
            <NavigationLink url='shop' caption="Back to Shop" />
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

export default NotFound;
