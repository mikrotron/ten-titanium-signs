import React from "react";

import { CommentType } from "@/helpers/types";

interface CommentFormProps {
  onSubmit: (comment: CommentType) => void;
}

const CommentForm = ({ onSubmit }: CommentFormProps): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const comment: CommentType = {} as CommentType;
    for (const [key, value] of data.entries()) {
      comment[key] = String(value);
    }

    onSubmit(comment);

    const messageField = (event.target as HTMLFormElement).elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;
    messageField.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required
            autoComplete="name"
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="message">Message</label>
        </div>
        <div>
          <textarea id="message" name="message" required aria-required />
        </div>
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentForm;
