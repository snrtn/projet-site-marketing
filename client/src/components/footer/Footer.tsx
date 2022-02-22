import React from "react";
// style
import {
  Container,
  Wrapper,
  Left,
  Title,
  Tel,
  Number,
  Email,
  Center,
  TitleLink,
  List,
  ListItem,
  Right,
  TitleSns,
  Desc,
} from "./footer.style";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Ssangmun Ju-jitsu | Gile Ribeiro Korea</Title>
          <Number>Business number : </Number>
          <Tel>Phone number : </Tel>
          <Email>
            Email de Développer React :{" "}
            <a
              href="mailto:hanjun.kim.dev@gmail.com"
              style={{ cursor: "pointer" }}
            >
              hanjun.kim.dev@gmail.com
            </a>
          </Email>
        </Left>
        <Center>
          <TitleLink>Useful Links</TitleLink>
          <List>
            <ListItem>소개</ListItem>
            <ListItem>주간일정</ListItem>
            <ListItem>이용시설</ListItem>
            <ListItem>오시는길</ListItem>
            <ListItem>상담</ListItem>
          </List>
        </Center>
        <Right>
          <TitleSns>Contact Us</TitleSns>
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
          <Desc>© 2022.All rights reserved.</Desc>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
