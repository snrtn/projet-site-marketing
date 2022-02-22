import styled from "styled-components";
import variable from "../../styles/variable";
import { r768px } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${variable.lightmode};
`;

export const Wrapper = styled.div`
  width: 1350px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${r768px({
    flexDirection: "column",
    height: "100%",
  })}
`;

export const Left = styled.div`
  flex: 1;
  height: inherit;
  flex-direction: column;
  padding: 20px 0px 0px 20px;
  border-right: 1.2px solid #00000010;
  margin-right: 20px;
  ${r768px({
    width: "100%",
    borderRight: "none",
    borderBottom: "1.2px solid #00000010",
    marginRight: "0px",
    paddingBottom: "20px",
  })}

  p {
    color: ${variable.darkmode};
    margin-top: 15px;
    font-weight: 400;
    font-size: ${variable.d16px};
    ${r768px({
      fontSize: variable.m18px,
    })}
  }
`;
export const Title = styled.h1`
  color: ${variable.darkmode};
  font-weight: bold;
  margin-bottom: 10px;
  font-size: ${variable.d18px};
  ${r768px({
    fontSize: variable.m20px,
  })}
`;
export const Number = styled.p``;
export const Tel = styled.p``;
export const Email = styled.p`
  a {
    color: ${variable.steelblue};
    &:hover {
      @media (hover: hover) {
        color: ${variable.orange};
      }
    }
  }
`;

export const Center = styled.div`
  flex: 1;
  height: inherit;
  padding: 20px 0px 0px 20px;
  border-right: 1.2px solid #00000010;
  margin-right: 20px;
  ${r768px({
    width: "100%",
    borderRight: "none",
    borderBottom: "1.2px solid #00000010",
    marginRight: "0px",
    paddingBottom: "20px",
  })}
`;
export const TitleLink = styled.h3`
  color: ${variable.darkmode};
  margin-bottom: 20px;
  font-weight: bold;
  font-size: ${variable.d18px};
  ${r768px({
    fontSize: variable.m20px,
  })}
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: ${variable.d16px};
  transition: 0.3s;
  cursor: pointer;
  ${r768px({
    fontSize: variable.m18px,
  })}
  &:hover {
    @media (hover: hover) {
      color: ${variable.orange};
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  height: inherit;
  padding: 20px;
  ${r768px({
    width: "100%",
    borderRight: "none",
    marginRight: "0px",
    paddingBottom: "20px",
  })}

  .sns {
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: relative;

    & button:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      transition: 0.7s;
    }

    & button:hover:before {
      @media (hover: hover) {
        height: 100%;
      }
    }

    & button:nth-child(1):before {
      background: linear-gradient(
        to right,
        #97359a,
        #ba2d71,
        #f81e23,
        #fd6130,
        #fca241
      );
    }
    & button:nth-child(2):before {
      background-color: #00bd39;
    }
    & button:nth-child(3):before {
      background-color: #edd611;
    }

    & button .fa {
      position: relative;
      transition: 0.5s;
    }
    & button .fa {
      position: relative;
      transition: 0.5s;
    }
    & button:hover .fa {
      @media (hover: hover) {
        transform: rotateY(360deg);
        color: #fff;
        border-radius: 50%;
      }
    }
    & button:hover .fa {
      @media (hover: hover) {
        transform: rotateY(360deg);
        color: #fff;
        border-radius: 50%;
      }
    }
    .icon {
      border: 3px solid ${variable.darkmode};
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #333333;
      text-align: center;
      line-height: 50px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      background-color: white;

      &:nth-child(2) {
        margin: 0px 10px;
      }

      .fa {
        font-size: ${variable.d20px};
        ${r768px({
          justifyContent: variable.m24px,
        })}
      }
    }
  }
`;
export const TitleSns = styled.h3`
  color: ${variable.darkmode};
  margin-bottom: 10px;
  font-weight: bold;
  font-size: ${variable.d18px};
  ${r768px({
    fontSize: variable.m20px,
  })}
`;

export const Desc = styled.p`
  margin-top: 25px;
  color: ${variable.darkmode};
`;
