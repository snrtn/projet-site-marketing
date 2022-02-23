import React, { useState } from "react";

// style
import styled from "styled-components";
import {
  Container,
  Wrapper,
  Left,
  LogoContainer,
  Image,
  TitleContainer,
  Title,
  SubTitle,
  Right,
  Menu,
  Icon,
  Burger,
} from "./navbar.style";
import variable from "../../styles/variable";
import { r768px } from "../../styles/responsive";

type Props = {};

const Item = styled.a`
  width: 85px;
  height: 65px;
  line-height: 65px;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-size: ${variable.d18px};
  ${r768px({
    color: variable.lightmode,
    fontSize: variable.m24px,
  })}

  &:before,
  &:after {
    position: absolute;
    content: attr(data-link);
    width: 100%;
    transition: all 0.75s;
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    top: 100%;
    left: 0;
    color: ${variable.orange};
  }

  &:hover:before {
    @media (hover: hover) {
      top: -100%;
    }
  }
  &:hover:after {
    @media (hover: hover) {
      top: 0;
    }
  }
`;

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((value) => !value);

  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoContainer>
            <Image alt="GileRibeiro" src="img/GileRibeiro.jpg" />
            <TitleContainer>
              <Title>쌍문주짓수</Title>
              <SubTitle>질리히베이로 코리아</SubTitle>
            </TitleContainer>
          </LogoContainer>
        </Left>
        <Right>
          <Menu open={open}>
            <Item onClick={toggleOpen} data-link="HOME"></Item>
            <Item onClick={toggleOpen} data-link="소개"></Item>
            <Item onClick={toggleOpen} data-link="주간일정"></Item>
            <Item onClick={toggleOpen} data-link="이용시설"></Item>
            <Item onClick={toggleOpen} data-link="오시는길"></Item>
            <Item onClick={toggleOpen} data-link="상담"></Item>
          </Menu>

          <Icon onClick={() => setOpen(!open)}>
            <Burger open={open}></Burger>
            <Burger open={open}></Burger>
            <Burger open={open}></Burger>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
