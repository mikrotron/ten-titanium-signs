import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "@/components/Comment/Comment";

describe("Comment", () => {
  it("renders comment info", () => {
    render(
      <Comment
        name="Mercutio"
        message="A plague on both your houses!"
        created="2023/09/18 22:30:00"
      />
    );

    const container = screen.getByRole("article");
    const name = screen.getByText(/mercutio/i);
    const message = screen.getByText(/a plague on both your houses/i);
    const date = screen.getByText(/september 18 at 10:30 pm/i);

    expect(container).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
