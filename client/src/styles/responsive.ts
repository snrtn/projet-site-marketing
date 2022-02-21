import { css } from "styled-components";

export const r768px = (props: any) => {
  return css`
    @media only screen and (min-width: 0px) and (max-width: 768px) {
      ${props}
    }
  `;
};

export const r1280px = (props: any) => {
  return css`
    @media only screen and (min-width: 768px) and (max-width: 1280px) {
      ${props}
    }
  `;
};

export const r1620px = (props: any) => {
  return css`
    @media only screen and (min-width: 1280px) and (max-width: 1620px) {
      ${props}
    }
  `;
};
