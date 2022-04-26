import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { ContentWrapper, ShimmerItem, ProductItem } from "../components/.";
import { ErrorPage } from "../pages/.";

function ShimmerList() {
    return [1, 2, 3, 4, 5, 6].map((item) => {
        return <ShimmerItem key={item} width="292px" height="372px" />;
    });
}

function Shop() {
    const { products, areProductsLoaded, doesErrorExist, errorMessage } =
        useProductsContext();

    if (!areProductsLoaded && !doesErrorExist) {
        return (
            <ContentWrapper>
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
            <Wrapper>
                {products.map(({ id, image, title, price, description }) => {
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
                })}
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
