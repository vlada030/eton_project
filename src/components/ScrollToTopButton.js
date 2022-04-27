import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { TiArrowUpOutline } from "react-icons/ti";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollBtn = useRef();

    useEffect(() => {
        
        let scrollableElem = document.getElementById("scroll-element");

        // u slucaju da ne postoji puca aplikacija
        // null.addEventListener
        if (scrollableElem) {

            scrollableElem.addEventListener("scroll", () => {
                if (scrollableElem.scrollTop > 300) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
    
            const goToPagesTop = () => {
                scrollableElem.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            };
    
            scrollBtn.current.addEventListener("click", goToPagesTop);
        }
    }, []);

    return (
        <Wrapper ref={scrollBtn} className={isVisible ? "" : "hidden"}>
            <TiArrowUpOutline />
        </Wrapper>
    );
};

const Wrapper = styled.button`
    position: absolute;
    top: 90vh;
    right: 2rem;
    background-color: var(--color-pink-300);
    border: 1px solid var(--color-white-100);
    border-radius: 50%;
    cursor: pointer;

    opacity: 1;
    visibility: visible;

    transition: var(--transition);

    display: grid;
    place-items: center;
    padding: 0.2rem;

    &:hover {
        background-color: var(--color-pink-600);
    }

    svg {
        width: 2rem;
        height: 2rem;
        color: var(--color-white-100);
    }

    &.hidden {
        opacity: 0;
        visibility: hidden;
    }

    @media screen and (min-width: 1024px) {
        top: 86vh;
    }
`;

export default ScrollToTopButton;
