import { styled, createGlobalStyle } from "styled-components";
import { Button } from "@/components/Primatives/Primatives.styles";
import { hiddenStyles } from "@/helpers/utility.styles";
import tokens from "@/helpers/tokens";

const { space, color } = tokens;

export const Header = styled.div`
  align-items: center;
  background-color: ${color.black};
  color: ${color.yellowDim};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${space.md} ${space["3"]};

  h1 {
    margin: 0;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${space["4"]};
  padding: ${space["3"]};

  @media (min-width: ${tokens.breakpoint}) {
    flex-direction: row;

    > :nth-child(1) {
      flex-basis: 33%;
    }

    > :nth-child(2) {
      flex-grow: 1;
      margin-top: 33.5px;
    }
  }
`;

export const Footer = styled.footer`
  align-items: center;
  background: ${color.whiteDim};
  border-top: 1px solid ${color.grey}33;
  bottom: 0;
  display: flex;
  position: fixed;
  gap: ${space["3"]};
  justify-content: center;
  left: 0;
  padding: ${space.md} ${space["3"]};
  text-align: center;
  width: 100%;

  &:not(:focus-within) {
    ${hiddenStyles}
  }

  ${Button} {
    font-size: ${tokens.fontSize.sm};
    padding: ${space.sm} ${space["2"]};
  }
`;

export const ResetStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${color.black};
    font-family: ${tokens.fontFamily.default};
    font-size: ${tokens.fontSize.md};
    line-height: 1.5;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    margin-top:0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
