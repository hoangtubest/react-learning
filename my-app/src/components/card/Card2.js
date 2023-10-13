import React from "react";
import styled, { css } from "styled-components";

/*
 * const StyledCard = styled.tag(div, h1, h2, h3, span, strong, a, p, section, article ...)`
  CSS-in-JS`
 */

const StyledCard = styled.div`
  position: relative;

  .card-image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
      object-position: center;
    }
  }

  .card-content {
    position: relative;
    z-index: 1;
    background: #fff;
    border-radius: 20px;
    width: calc(100% - 40px);
    padding: 20px;
    margin: 0 auto;
    transform: translateY(-50%);
  }

  .card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    span {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 300;
      color: #333;
      color: ${(props) => props.theme.colors.orange};
    }
  }

  .card-like {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    img {
      width: 20px;
      flex-shrink: 0;
    }

    span {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
      color: #333;
    }
  }

  .card-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    gap: 12px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
  }

  .card-amount {
    font-size: ${(props) => props.fontSize || "20px"};
    font-weight: 700;
    ${(props) =>
      props.color &&
      css`
        background: ${props.color};
      `};
    ${(props) =>
      !props.color &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard color={props.colorAmount} fontSize={props.fontSize}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768"
          alt="Card Image"
        />
      </div>
      <div className="card-content">
        <div className="card-head">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/6349608/dribble.jpg?resize=800x600&vertical=center"
              alt="Avatar"
            />
            <span>@zndrson</span>
          </div>
          <div className="card-like">
            <img src="/ico_heart.svg" alt="Heart" />
            <span>256</span>
          </div>
        </div>
        <div className="card-foot">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
