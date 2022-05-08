import styled from "styled-components";
import {
    ContentWrapper,
    ShimmerItem,
    ProductItem,
    FilterItemsForm,
} from "../components/.";
import { ErrorPage } from "../pages/.";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function ShimmerList() {
    return [1, 2, 3, 4, 5, 6].map((item) => {
        return <ShimmerItem key={item} width="292px" height="372px" />;
    });
}

function Shop() {
    const noSearchResults = useSelector(
        (state) => state.products.noSearchResults
    );
    const filteredProducts = useSelector(
        (state) => state.products.filteredProducts
    );
    const areProductsLoaded = useSelector(
        (state) => state.products.areProductsLoaded
    );
    const doesErrorExist = useSelector(
        (state) => state.products.doesErrorExist
    );
    const errorMessage = useSelector((state) => state.products.errorMessage);

    if (!areProductsLoaded && !doesErrorExist) {
        return (
            <ContentWrapper>
                <FilterItemsForm />
                <Wrapper>
                    <ShimmerList />
                </Wrapper>
            </ContentWrapper>
        );
    }

    if (doesErrorExist) {
        return <ErrorPage message={errorMessage} />;
    }

    return (
        <ContentWrapper>
            <FilterItemsForm />

            {/* {noSearchResults && (
                <h2 style={{ textAlign: "center" }}>
                    Sorry, your search criteria didn't give any results...
                </h2>
            )} */}

            {noSearchResults && (
                <CSSTransition
                    in={noSearchResults}
                    classNames="fade"
                    timeout={400}
                >
                    <h2 style={{ textAlign: "center" }}>
                        Sorry, your search criteria didn't give any results...
                    </h2>
                </CSSTransition>
            )}

            <TransitionGroup component={Wrapper}>
                {filteredProducts.map(
                    ({ id, image, title, price, description }) => {
                        return (
                            <CSSTransition
                                key={id}
                                appear={true}
                                timeout={400}
                                classNames="fade"
                            >
                                <ProductItem
                                    key={id}
                                    id={id}
                                    image={image}
                                    title={title}
                                    price={price}
                                    description={description}
                                />
                            </CSSTransition>
                        );
                    }
                )}
            </TransitionGroup>
        </ContentWrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
    gap: 42px;
    justify-items: center;
`;

export default Shop;
