import React from "react";
import styled from "@emotion/styled";
import { Pagination } from "antd";
import { Beer } from "../Beer/Beer";
import FilterForm from "./FilterForm";

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

export const ProductPage = ({
  setAbvFilter,
  onPageChanged,
  total,
  addProduct,
  deleteProduct,
  cartItems,
  beers,
}) => {
  const onSubmit = ({ abv }) => {
    setAbvFilter(abv);
  };

  return (
    <div>
      <Panel>
        <Pagination
          defaultCurrent={1}
          onChange={onPageChanged}
          total={total}
          showSizeChanger={false}
        />
        <FilterForm onSubmit={onSubmit} />
      </Panel>

      <Products>
        {beers.map((beer) => (
          <Beer
            {...beer}
            deleteProduct={deleteProduct}
            addProduct={addProduct}
            cartItems={cartItems}
          />
        ))}
      </Products>
    </div>
  );
};
