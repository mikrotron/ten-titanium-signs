import React from "react";
import { newCommentDelay } from "@/helpers/constants";

const useNewComment = (commentsLength: number = -1): boolean => {
  const [isNew, setIsNew] = React.useState(false);
  const prevCommentsLength = React.useRef(commentsLength);

  React.useEffect(() => {
    if (prevCommentsLength.current === -1) {
      prevCommentsLength.current = commentsLength;
      return;
    }

    prevCommentsLength.current = commentsLength;
    setIsNew(true);
    const timeout = setTimeout(() => setIsNew(false), newCommentDelay);
    return () => clearTimeout(timeout);
  }, [commentsLength]);

  return isNew;
};

export default useNewComment;
