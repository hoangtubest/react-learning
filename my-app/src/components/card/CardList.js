import React from "react";
import styled from "styled-components";

const StyledCardList = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 25px;
  padding: 25px;
`;

const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
