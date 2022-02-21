import React, { useState } from "react";

// style
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
  Item,
  Icon,
  Burger,
} from "./navbar.style";

type Props = {};

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
            <Item onClick={toggleOpen}>홈</Item>
            <Item onClick={toggleOpen}>소개</Item>
            <Item onClick={toggleOpen}>주간일정</Item>
            <Item onClick={toggleOpen}>이용시설</Item>
            <Item onClick={toggleOpen}>오시는길</Item>
            <Item onClick={toggleOpen}>상담</Item>
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
