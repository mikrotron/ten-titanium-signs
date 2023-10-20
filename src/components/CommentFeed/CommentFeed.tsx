import React from "react";
import Comment from "@/components/Comment/Comment";
import { CommentType } from "@/helpers/types";
import useComments from "@/hooks/useComments";
import useNewComment from "@/hooks/useNewComment";

const CommentFeed = (): JSX.Element => {
  const { comments, isLoading } = useComments();
  const isNew = useNewComment(comments?.length);

  return (
    <div role="feed" aria-busy={isLoading} aria-label="Comments Feed">
      {isLoading && <p>Loading...</p>}
      {!isLoading && comments.length === 0 && <p>No comments yet.</p>}
      {!isLoading &&
        comments.length > 0 &&
        [...comments]
          .reverse()
          .map((comment: CommentType, index) => (
            <Comment
              key={comment.id}
              isNew={isNew && index === 0}
              {...comment}
            />
          ))}
    </div>
  );
};

export default CommentFeed;
