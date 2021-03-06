import React from "react";
import styled from "@emotion/styled";
import { Pagination } from "antd";
import { Beer } from "../beer";
import FilterForm from "./filter-form";

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const ProductPage = ({
  setAbvFilter,
  onPageChanged,
  total,
  onManage,
  cart,
  beers,
}) => {
  const onSubmit = ({ abv }) => {
    setAbvFilter(abv);
  };

  const formatBeers = beers.map((beer) => ({
    ...beer,
    isReserve: cart.some(({ id }) => id === beer.id),
  }));

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
        {formatBeers.map((beer, index) => (
          <Beer beer={beer} onManage={onManage} key={index} />
        ))}
      </Products>
    </div>
  );
};
