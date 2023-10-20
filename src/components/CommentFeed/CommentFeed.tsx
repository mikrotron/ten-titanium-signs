import Comment from "@/components/Comment/Comment";
import { CommentType } from "@/helpers/types";
import useComments from "@/hooks/useComments";
import useNewComment from "@/hooks/useNewComment";
import { Spinner } from "@/helpers/utility.styles";

const CommentFeed = (): JSX.Element => {
  const { comments, isLoading, error } = useComments();
  const isNew = useNewComment(comments?.length);

  return (
    <div role="feed" aria-busy={isLoading} aria-label="comments feed">
      {error && (
        <div aria-atomic="true" aria-live="polite">
          <h2>Uh oh❗️</h2>
          <code>{error.message}</code>
        </div>
      )}

      {isLoading && (
        <div aria-atomic="true" aria-live="polite">
          <Spinner aria-hidden />
          <em>Loading...</em>
        </div>
      )}

      {!isLoading && comments?.length === 0 && (
        <div aria-atomic="true" aria-live="polite">
          <em>No comments yet.</em>
        </div>
      )}

      {!isLoading &&
        comments?.length > 0 &&
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
