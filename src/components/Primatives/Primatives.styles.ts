import { styled, css } from "styled-components";
import tokens from "@/helpers/tokens";

const { space, color } = tokens;

const focusStyles = css`
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px ${color.white}, 0 0 0 3px ${color.blue};
  }
`;

const transitionStyles = css`
  transition: background-color 0.15s ease-in-out, box-shadow 0.35s ease-in;
`;

const commonInputStyles = css`
  background-color: ${color.whiteDim};
  border: 1px solid ${color.grey};
  border-radius: ${tokens.radius};
  font-size: ${tokens.fontSize.md};
  padding: ${space.md};
  width: 100%;
  ${transitionStyles}

  &:hover,
  &:focus-visible {
    background-color: ${color.whiteDim}66;
  }

  ${focusStyles}
`;

export const Button = styled.button`
  background-color: ${color.black};
  border: 1px solid ${color.grey};
  border-radius: ${tokens.radius};
  color: ${color.white};
  cursor: pointer;
  font-size: ${tokens.fontSize.lg};
  padding: ${space.md} ${space["2"]};
  ${transitionStyles}

  &:hover {
    background: ${color.black}cc;
  }

  ${focusStyles}
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space.sm};
`;

export const Label = styled.label`
  font-size: ${tokens.fontSize.sm};
  padding: ${space.sm} 0;
  width: 100%;
`;

export const Input = styled.input`
  ${commonInputStyles}
`;

export const TextArea = styled.textarea`
  resize: vertical;
  ${commonInputStyles}
`;
