import React from "react";
import formatDate from "@/helpers/formatDate";
import {
  CommentContainer,
  CommentMeta,
  CommentBody,
  NewTag,
} from "@/components/Comment/Comment.styles";
interface CommmentProps {
  name: string;
  message: string;
  created?: string;
  isNew?: boolean;
}

const Comment = ({
  name,
  message,
  created = "",
  isNew = false,
}: CommmentProps): JSX.Element => {
  return (
    <CommentContainer aria-atomic="true" aria-live="polite" isNew={isNew}>
      {isNew && <NewTag>New comment!</NewTag>}
      <CommentBody>{message}</CommentBody>
      <CommentMeta>
        {name} on {formatDate(new Date(created))}
      </CommentMeta>
    </CommentContainer>
  );
};

export default Comment;
