import React from "react";
import {
  Input,
  TextArea,
  Button,
  FormField,
  Label,
} from "@/components/Primatives/Primatives.styles";
import { CommentFormContainer } from "./CommentForm.styles";
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
    <CommentFormContainer onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          aria-required
          autoComplete="name"
        />
      </FormField>
      <FormField>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" required aria-required rows={4} />
      </FormField>
      <Button type="submit">Post</Button>
    </CommentFormContainer>
  );
};

export default CommentForm;
