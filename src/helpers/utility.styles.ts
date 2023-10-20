import { styled, css } from "styled-components";
import tokens from "@/helpers/tokens";
export const hiddenStyles = css`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

// spinning animation
export const Spinner = styled.span`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  margin-right: ${tokens.space.md};

  &::before {
    content: "↻";
    padding-bottom: 0.2rem;
    animation: spin 0.7s linear infinite;
    color: ${tokens.color.black}66;
    display: inline-block;
    font-size: 2rem;
    vertical-align: -0.1em;
    line-height: 1;
  }
`;
