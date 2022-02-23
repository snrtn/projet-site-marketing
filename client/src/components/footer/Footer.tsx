import React from "react";
// style
import {
  Container,
  Wrapper,
  Left,
  Title,
  DescContainer,
  Desc,
  Email,
  Center,
  TitleLink,
  List,
  ListItem,
  Right,
  TitleSns,
  Copyright,
} from "./footer.style";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>쌍문주짓수 | 질리히베이로 코리아</Title>
          <DescContainer>
            <Desc>대표자 : 박신용</Desc>
            <Desc>사업자번호 : 513-81-68640</Desc>
            <Desc>전화번호 : 111-1111-1111</Desc>
            <Email>
              이메일 :{" "}
              <a
                href="mailto:hanjun.kim.dev@gmail.com"
                style={{ cursor: "pointer" }}
              >
                email@gmail.com
              </a>
            </Email>
            <Desc>주소 : </Desc>
          </DescContainer>
        </Left>
        <Center>
          <TitleLink>유용한 링크</TitleLink>
          <List>
            <ListItem>소개</ListItem>
            <ListItem>주간일정</ListItem>
            <ListItem>이용시설</ListItem>
            <ListItem>오시는길</ListItem>
            <ListItem>상담</ListItem>
          </List>
        </Center>
        <Right>
          <TitleSns>SNS 및 상담</TitleSns>
          <div className="sns">
            <button className="icon" onClick={() => window.open("", "_blank")}>
              <i className="fa fa-brands fa-instagram"></i>
            </button>
            <button className="icon" onClick={() => window.open("", "_blank")}>
              <i className="fa fa-solid fa-n"></i>
            </button>
            <button className="icon" onClick={() => window.open("", "_blank")}>
              <i className="fa fa-solid fa-comment-dots"></i>
            </button>
          </div>
          <Copyright>© 2022.All rights reserved.</Copyright>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
