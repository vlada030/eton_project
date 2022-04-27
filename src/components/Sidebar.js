import styled from "styled-components"
import {useSelector} from 'react-redux'
import {MenuItem} from '.' 
import { useLocation } from "react-router-dom";


function Sidebar() {

    const isSidebarOpen = useSelector(state => state.global.isSidebarOpen)
    const activeMenuItem = useSelector(state => state.global.activeMenuItem)

    let location = useLocation();
    const isCartPageLoaded = location.pathname === "/cart";

    return (
        <Wrapper className={isSidebarOpen ? "open" : ""}>
            <ul className="menu-list">
                <li
                    className={
                        activeMenuItem === "Home" && !isCartPageLoaded
                            ? "menu-item active"
                            : "menu-item"
                    }
                >
                    <MenuItem caption="Home" />
                </li>
                <li
                    className={
                        activeMenuItem === "Shop" && !isCartPageLoaded
                            ? "menu-item active"
                            : "menu-item"
                    }
                >
                    <MenuItem caption="Shop" />
                </li>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 0;
    height: 100vh;
    background: linear-gradient(
        -135deg,
        var(--color-pink-300) 0%,
        var(--color-blue-500) 60%
       
    );

    overflow: hidden;
    transition: var(--transition);
    transition-timing-function: ease-out;
    z-index: 50;

    display: flex;
    align-items: center;

    &.open {
        width: calc(90vw - 36px);
    }

    .menu-list {
        list-style: none;
        width: 50%;
        margin: 0 auto;
    }

    .menu-item {
        display: flex;
        align-items: center;
        border-bottom: 3px solid transparent;
        padding: 20px 15px 10px 15px;
    }

    .menu-item.active {
        border-bottom: 3px solid var(--color-blue-200);
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export default Sidebar