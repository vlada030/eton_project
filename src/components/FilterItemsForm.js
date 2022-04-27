import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { SortButton } from ".";
import {debounce} from '../utils/debounce'
import {useDispatch} from 'react-redux'
import { productsActions } from "../store/products_slice";


function FilterItemsForm() {
    const dispatch = useDispatch()

    const handleSearchInput = (term) => {
        dispatch(productsActions.handleSearchInput(term))
    }
    const searchField = useRef();

    useEffect(() => {
        searchField.current.focus()
    }, [])

    const handleUserInput = (e) => {
        debounce(handleSearchInput(e.target.value));
    };
    return (
        <Wrapper>
            <form className="form">
                <div className="form-control">
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Type product's name..."
                        onChange={handleUserInput}
                        ref={searchField}
                    />
                    <BsSearch className="search-icon" />
                </div>
            </form>

            <SortButton />
        </Wrapper>
    );
}

const Wrapper = styled.section`
    //width: 346px;
    width: 292px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 77px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .form {
        box-shadow: 0px 2px 18px rgba(42, 52, 163, 0.07);
    }
    .form-control {
        position: relative;
    }
    
    .text-input {
        display: block;
        width: 100%;
        height: 40px;
        
        border: 0;
        border-radius: var(--border-radius-10);
        border-bottom: 1px solid transparent;
        transition: var(--transition);
        // background-color: transparent;
        padding: 10px;
        padding-left: 40px;
    }

    .text-input:focus {
        outline: 0;
        border-bottom: 1px solid var(--color-pink-300);
    }

    .text-input::placeholder {
        color: var(--color-gray-300);
        font-style: italic;
    }

    .search-icon {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 20px;
        height: auto;
        fill: var(--color-pink-300);
    }
`;

export default FilterItemsForm;
