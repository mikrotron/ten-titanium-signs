import { styled } from "styled-components";
import { FormField } from "@/components/Primatives/Primatives.styles";
import tokens from "@/helpers/tokens";

export const CommentFormContainer = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${tokens.space.lg};

  ${FormField} {
    width: 100%;
  }
`;
