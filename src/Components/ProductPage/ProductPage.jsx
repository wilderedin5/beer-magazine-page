import React from "react";
import styled from "@emotion/styled";
import { Pagination } from "antd";
import Beer from "../Beer/Beer";
import FilterForm from "./FilterForm/FilterForm";

const Container = styled.div``;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductPage = (props) => {
  const onSubmit = (formData) => {
    props.setAbvFilter(formData.abv);
  };

  return (
    <Container>
      <Panel>
        <Pagination
          defaultCurrent={1}
          onChange={props.onPageChanged}
          total={props.totalItemsCount}
          showSizeChanger={false}
        />
        <FilterForm onSubmit={onSubmit} />
      </Panel>

      <Products>
        {props.beers.map((beer) => (
          <Beer
            image={beer.image_url}
            name={beer.name}
            description={beer.description}
            tips={beer.brewers_tips}
            beerId={beer.id}
            contributed={beer.contributed_by}
            date={beer.first_brewed}
            abv={beer.abv}
            addItemToCart={props.addItemToCart}
            beersInCart={props.beersInCart}
          />
        ))}
      </Products>
    </Container>
  );
};

export default ProductPage;
