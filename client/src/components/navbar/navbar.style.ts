import styled from "styled-components";
import variable from "../../styles/variable";
import { r768px, r1280px } from "../../styles/responsive";

interface open {
  readonly open: boolean;
}

export const Container = styled.header`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1350px;
  height: 65px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  ${r1280px({
    flex: "0.2",
  })}
`;
export const LogoContainer = styled.article`
  display: flex;
  align-items: center;
  width: 180px;
  height: 100%;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 45px;
  height: 45px;
`;
export const TitleContainer = styled.div`
  margin-left: 20px;
`;
export const Title = styled.h1`
  font-size: ${variable.d18px};
  ${r768px({
    fontSize: variable.m24px,
  })}
`;
export const SubTitle = styled.h2`
  font-size: ${variable.d12px};
  ${r768px({
    fontSize: variable.m16px,
  })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  ${r768px({
    flex: "0.2",
    paddingRight: "20px",
  })}
`;

export const Menu = styled.div<open>`
  font-family: "Zilla Slab", sans-serif;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 0;
  justify-content: flex-end;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    right: ${(props) => (props.open ? "0px" : "-250px")};
    top: 0px;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    margin-left: 0px;
    z-index: 99;
    justify-content: normal;
    transition: all 0.3s linear;
    border-left: 1px solid ${variable.lightmode};
    background-color: ${variable.darkmode};
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 20px;
  z-index: 99;
  display: none;
  cursor: pointer;
  position: relative;
  font-family: "Zilla Slab", sans-serif;
  position: fixed;
  ${r768px({
    display: "flex",
  })}
`;

export const Burger = styled.div<open>`
  width: 30px;
  height: 3px;
  background: ${variable.black};
  border-radius: 10px;
  transition: all 0.3s linear;
  cursor: pointer;
  position: absolute;

  @media (prefers-color-scheme: dark) {
    background: ${variable.white};
  }

  &:nth-child(1) {
    top: ${(props) => (props.open ? "50%" : "0")};
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    top: 50%;
    transform: ${(props) =>
      props.open ? "translateX(100%)" : "translateX(0)"};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    top: ${(props) => (props.open ? "50%" : "100%")};
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
