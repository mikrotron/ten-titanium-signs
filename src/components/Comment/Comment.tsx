import React from "react";
import formatDate from "@/helpers/formatDate";

interface CommmentProps {
  name: string;
  message: string;
  created?: string;
}

const Comment = ({
  name,
  message,
  created = "",
}: CommmentProps): JSX.Element => (
  <div style={{ border: "1px solid #888", padding: "0 8px", margin: "8px 0" }}>
    <p>{message}</p>
    <p>
      {name} on {formatDate(new Date(created))}
    </p>
  </div>
);

export default Comment;
