import React from "react";
import formatDate from "@/helpers/formatDate";

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
    <article
      aria-atomic="true"
      aria-live="polite"
      style={{ border: "1px solid #888", padding: "0 8px", margin: "8px 0" }}
    >
      {isNew && <p>New comment!</p>}
      <p>{message}</p>
      <p>
        {name} on {formatDate(new Date(created))}
      </p>
    </article>
  );
};

export default Comment;
