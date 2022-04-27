import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux'

function SideNavButton() {

    const isSidebarOpen = useSelector(state => state.isSidebarOpen)

    const dispatch = useDispatch()
    const handleSidebarVisibility = () => {
        dispatch({ type: "SIDEBAR_TOGGLE" });
    };

    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "burger burger-slide open"
                        : "burger burger-slide"
                }

                onClick={() => handleSidebarVisibility()}
            >
                <div className="burger-lines"></div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .burger {
        height: 3em;
        width: 3em;
        position: relative;
        font-size: 12px;
        cursor: pointer;
        -webkit-transition: 0.2s all;
        -o-transition: 0.2s all;
        transition: 0.2s all;
        -webkit-tap-highlight-color: transparent;
    }
    .burger .burger-lines:after {
        left: 0;
        top: -1em;
    }
    .burger .burger-lines:before {
        left: 1em;
        top: 1em;
    }
    .burger:after {
        content: "";
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
    }
    .burger .burger-lines {
        top: 50%;
        margin-top: -0.125em;
    }
    .burger .burger-lines,
    .burger .burger-lines:after,
    .burger .burger-lines:before {
        pointer-events: none;
        display: block;
        content: "";
        width: 100%;
        border-radius: 0.25em;
        background-color: white;
        height: 0.25em;
        position: absolute;
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
    }
    .burger .burger-lines:after {
        left: 0;
        top: -1em;
    }
    .burger .burger-lines:before {
        left: 1em;
        top: 1em;
    }
    @-webkit-keyframes burgerAnimationSlide {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
        49% {
            -webkit-transform: translateX(-0.7em);
            transform: translateX(-0.7em);
            opacity: 0;
        }
        50% {
            -webkit-transform: translateX(0.7em);
            transform: translateX(0.7em);
            opacity: 0;
        }
        51% {
            opacity: 0;
        }
        75% {
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
            opacity: 1;
        }
    }

    @keyframes burgerAnimationSlide {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
        49% {
            -webkit-transform: translateX(-0.7em);
            transform: translateX(-0.7em);
            opacity: 0;
        }
        50% {
            -webkit-transform: translateX(0.7em);
            transform: translateX(0.7em);
            opacity: 0;
        }
        51% {
            opacity: 0;
        }
        75% {
            opacity: 1;
        }
        100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
            opacity: 1;
        }
    }

    .burger.burger-slide .burger-lines {
        -webkit-transition: 0.1s all 0.15s;
        -o-transition: 0.1s all 0.15s;
        transition: 0.1s all 0.15s;
    }
    .burger.burger-slide .burger-lines:after,
    .burger.burger-slide .burger-lines:before {
        width: 2em;
        -webkit-transition: 0.1s all 0.15s;
        -o-transition: 0.1s all 0.15s;
        transition: 0.1s all 0.15s;
    }

    .burger.burger-slide:not(.open) {
        -webkit-animation-name: burgerAnimationSlide;
        animation-name: burgerAnimationSlide;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        background-color: transparent;
    }

    .burger.burger-slide.open .burger-lines {
        -webkit-animation-name: burgerAnimationSlide;
        animation-name: burgerAnimationSlide;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        background-color: transparent;
    }
    .burger.burger-slide.open .burger-lines:before,
    .burger.burger-slide.open .burger-lines:after {
        left: 0.5em;
        top: 0px;
    }
    .burger.burger-slide.open .burger-lines:before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .burger.burger-slide.open .burger-lines:after {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export default SideNavButton