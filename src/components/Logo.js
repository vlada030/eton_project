import { Link } from "react-router-dom";
import LogoImg from "../assets/logoImg.png";
import styled from "styled-components";

function Logo() {
    return (
        <Wrapper>
            <Link to="home" className="logo-link">
                <img src={LogoImg} className="logo-img" alt="logo" />
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .logo-link {
        display: inline-block;
        margin: 5vw 0;
    }

    .logo-img {
        width: 130px;
        height: auto;
    }

    @media screen and (min-width: 768px) {
        .logo-link {
            margin: 4vw 0;
        }

        .logo-img {
            width: 143px;
        }
    }

    @media screen and (min-width: 1024px) {
        .logo-link {
            margin: 3vw 0;
        }
    }

    @media screen and (min-width: 1280px) {
        .logo-link {
            margin: 20px 0;
        }

        .logo-img {
            width: 153px;
        }
    }

    @media (orientation: landscape) and (max-width: 1024px) and (max-height: 700px) {
        .logo-link {
            margin: 2vw 0;
        }
    }
`;

export default Logo;
