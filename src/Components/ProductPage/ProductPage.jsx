import React from "react";
import styled from "@emotion/styled";
import { Pagination } from "antd";
import Beer from "../Beer/Beer";
import FilterForm from "./FilterForm";

const Container = styled.div``;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-gap: 20px;
`;

const ProductPage = ({
  setAbvFilter,
  onPageChanged,
  totalProducts,
  addProduct,
  cartItems,
  beers,
}) => {
  const onSubmit = ({ abv }) => {
    setAbvFilter(abv);
  };

  return (
    <Container>
      <Panel>
        <Pagination
          defaultCurrent={1}
          onChange={onPageChanged}
          total={totalProducts}
          showSizeChanger={false}
        />
        <FilterForm onSubmit={onSubmit} />
      </Panel>

      <Products>
        {beers.map((beer) => (
          <Beer
            image={beer.image_url}
            name={beer.name}
            description={beer.description}
            tips={beer.brewers_tips}
            beerId={beer.id}
            contributed={beer.contributed_by}
            date={beer.first_brewed}
            abv={beer.abv}
            addProduct={addProduct}
            cartItems={cartItems}
          />
        ))}
      </Products>
    </Container>
  );
};

export default ProductPage;
