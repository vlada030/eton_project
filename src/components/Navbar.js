import styled from "styled-components";

import { Logo, MenuItem, ShoppingCartButton, SideNavButton , CartPreviewPanel } from ".";
import { useGlobalContext } from "../context/global_context";

function Navbar() {

    const {activeMenuItem} = useGlobalContext()

    return (
        <Wrapper>
            <ul className="navbar">
                <li className="logo">
                    <Logo />
                </li>

                <li
                    className={
                        activeMenuItem === "Home"
                            ? "menu-item active"
                            : "menu-item"
                    }
                >
                    <MenuItem caption="Home" />
                </li>

                <li
                    className={
                        activeMenuItem === "Shop"
                            ? "menu-item active"
                            : "menu-item"
                    }
                >
                    <MenuItem caption="Shop" />
                </li>

                <li className="cart">
                    <ShoppingCartButton count="3" />
                    <CartPreviewPanel />
                </li>

                <li className="side-nav">
                    <SideNavButton />
                </li>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    background: linear-gradient(
        90deg,
        var(--color-blue-500) 0%,
        var(--color-pink-300) 100%
    );

    .navbar {
        list-style: none;
        width: 90%;
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    .logo {
        margin-right: auto;
    }

    .menu-item {
        display: none;
    }

    .cart {
        position: relative;
        margin-right: calc(5vw + 7px);
    }

    @media screen and (min-width: 768px) {
        .menu-item {
            align-self: stretch;
            display: flex;
            align-items: center;
            margin-right: 72px;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
        }

        .menu-item.active {
            border-top: 3px solid var(--color-blue-200);
            border-bottom: 3px solid var(--color-blue-200);
        }

        .cart {
            margin-right: 0;
        }

        .side-nav {
            display: none;
        }
    }
`;

export default Navbar;
