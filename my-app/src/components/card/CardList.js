import React from "react";
// import styled from "styled-components";

// const StyledCardList = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: 25px;
//   padding: 25px;
// `;

// const CardList = (props) => {
//   return <StyledCardList>{props.children}</StyledCardList>;
// };

const CardList = (props) => {
  return (
    <div className="max-w-[980px] mx-auto grid grid-cols-2 p-[25px] gap-x-[25px] ">
      {props.children}
    </div>
  );
};

export default CardList;
