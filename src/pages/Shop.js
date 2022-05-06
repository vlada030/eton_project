import styled from "styled-components";
import {
    ContentWrapper,
    ShimmerItem,
    ProductItem,
    FilterItemsForm,
} from "../components/.";
import { ErrorPage } from "../pages/.";
import { useSelector } from "react-redux";

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

            {noSearchResults && (

                <h2 style={{ textAlign: "center" }}>
                    Sorry, your search criteria didn't give any results...
                </h2>
            )}

            <Wrapper>
                {filteredProducts.map(
                    ({ id, image, title, price, description }) => {
                        return (
                            <ProductItem
                                key={id}
                                id={id}
                                image={image}
                                title={title}
                                price={price}
                                description={description}
                            />
                        );
                    }
                )}
            </Wrapper>

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
