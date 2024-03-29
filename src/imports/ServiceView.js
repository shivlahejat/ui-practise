import ButtonWrap from "@/atoms/Button";
import Search from "@/atoms/Search";
import React from "react";
import styled, { css } from "styled-components";

const ServiceView = () => {
  return (
    <Wrapper>
      <TopicTitle>
        <Title>Our Services</Title>
        <Border />
        <SubTitleWrap>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </SubTitleWrap>
      </TopicTitle>
      <BgImg />
      <CardDetail>
        <GG>
          {[...Array(6)].map((_, j) => {
            return (
              <Card key={j}>
                <Search />
                <Title fontSize>Search doctor</Title>
                <CardSubTitle>
                  Choose your doctor from thousands of specialist, general, and
                  trusted hospitals
                </CardSubTitle>
              </Card>
            );
          })}
        </GG>
        <ButtonWrap text="Learn More" />
      </CardDetail>
    </Wrapper>
  );
};

export default ServiceView;

const BgImg = styled.div`
  width: 937.951px;
  height: 671.352px;
  position: absolute;
  left: 0;
  background-image: url("/static/images/landingView/Vector.png");
`;

const GG = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1120px;
  gap: 35px;
`;

const CardSubTitle = styled.div`
  color: #7d7987;
  font-family: "MulishLight";
  font-size: 16px;
  line-height: 28px;
`;

const Card = styled.div`
  width: 350px;
  height: 354px;
  cursor: pointer;
  border-radius: 20px;
  padding: 40px;
  background: #fff;
  z-index: 9999;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: center;
`;

const SubTitleWrap = styled.div`
  color: #7d7987;
  text-align: center;
  font-family: "MulishLight";
  font-size: 18px;
  font-style: normal;
  line-height: 30px;
  margin-top: 28px;
  max-width: 60%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;
const TopicTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: #000;
  font-family: "MulishBold";
  font-size: 36px;
  line-height: 56px;

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: 24px;
    `}
`;

const Border = styled.div`
  width: 56px;
  height: 2px;
  border-radius: 5px;
  background: #000;
`;
