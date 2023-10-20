import { styled, css } from "styled-components";
import { hiddenStyles } from "@/helpers/utility.styles";
import tokens from "@/helpers/tokens";

const { space, color } = tokens;

export const CommentContainer = styled.article<{ $isNew: boolean }>`
  display: block;
  background-color: ${({ $isNew }) =>
    $isNew
      ? css`
          ${color.green}cc;
          transition: none;
        `
      : `${color.yellow}33`};
  border: 1px solid ${color.grey};
  border-radius: ${tokens.radius};
  margin-bottom: ${space["3"]};
  padding: ${space.sm} ${space["2"]};
  transition: background-color 1s ease-out;

  p {
    margin: ${space["2"]} 0;
  }
`;

export const CommentBody = styled.p`
  font-size: ${tokens.fontSize.lg};
`;

export const CommentMeta = styled.p`
  font-size: ${tokens.fontSize.sm};
  opacity: 0.8;
`;

export const NewTag = styled.div`
  ${hiddenStyles}
`;
