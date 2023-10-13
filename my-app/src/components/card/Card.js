import React from "react";
import styled, { css } from "styled-components";

/*
 * const StyledCard = styled.tag(div, h1, h2, h3, span, strong, a, p, section, article ...)`
  CSS-in-JS`
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardFigure = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 20px;
  width: calc(100% - 40px);
  padding: 20px;
  margin: 0 auto;
  transform: translateY(-50%);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardUse = styled.div`
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
`;

const CardUseName = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  color: #333;
`;

const CardLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const CardLikeImage = styled.img`
  width: 20px;
  flex-shrink: 0;
`;

const CardLikeTxt = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: #333;
`;

const CardFoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  gap: 12px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const CardAmount = styled.span`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 700;
  ${(props) =>
    props.color &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #6a5af9);
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
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardFigure>
        <CardImg
          src="https://cdn.dribbble.com/userupload/5611128/file/original-f2c496d6ab81b83e8007530112146e04.png?resize=1024x768"
          alt="Card Image"
        />
      </CardFigure>
      <CardContent>
        <CardHeader>
          <CardUse>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/6349608/dribble.jpg?resize=800x600&vertical=center"
              alt="Avatar"
            />
            <CardUseName>@zndrson</CardUseName>
          </CardUse>
          <CardLike>
            <CardLikeImage src="/ico_heart.svg" alt="Heart" />
            <CardLikeTxt>256</CardLikeTxt>
          </CardLike>
        </CardHeader>
        <CardFoot>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount color={props.colorSecondary} fontSize="18px">
            12,000 PSL
          </CardAmount>
        </CardFoot>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
