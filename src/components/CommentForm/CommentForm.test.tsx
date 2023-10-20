import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CommentForm from "@/components/CommentForm/CommentForm";

describe("CommentForm", () => {
  it("renders comment form", () => {
    render(<CommentForm onSubmit={() => {}} />);

    const nameField = screen.getByLabelText(/name/i);
    const messageField = screen.getByLabelText(/message/i);
    const postButton = screen.getByRole("button", { name: /post/i });

    expect(nameField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
    expect(postButton).toBeInTheDocument();
  });
  it("calls onSubmit with comment body", () => {
    const handleSubmit = vi.fn();
    render(<CommentForm onSubmit={handleSubmit} />);

    const nameField = screen.getByLabelText(/name/i);
    const messageField = screen.getByLabelText(/message/i);
    const postButton = screen.getByRole("button", { name: /post/i });

    fireEvent.change(nameField, { target: { value: "John Doe" } });
    fireEvent.change(messageField, { target: { value: "Hello World!" } });
    fireEvent.click(postButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      message: "Hello World!",
    });
  });
});
