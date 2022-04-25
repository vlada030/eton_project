import {Link} from 'react-router-dom'
import styled from 'styled-components';

function NavigationLink({url, caption}) {
    return (
        <Wrapper>
            <Link to={url} className="link">
                {caption}
            </Link>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    .link {
        font-size: 16px;
        line-height: 19px;
        color: var(--color-white-100);
        text-decoration: none;
        border-radius: var(--border-radius-4);
        background-color: var(--color-pink-300);

        transition: var(--transition);

        padding: 9px 18px;

        &:hover {
            background-color: var(--color-blue-500);
        }
    }
`;

export default NavigationLink;