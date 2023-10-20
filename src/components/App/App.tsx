import React from "react";
import CommentForm from "@/components/CommentForm/CommentForm";
import Comment from "@/components/Comment/Comment";

import { CommentType } from "@/helpers/types";

function App() {
  const [comments, setComments] = React.useState<CommentType[]>([]);

  async function fetchData() {
    const response = await fetch("http://localhost:3001/getComments");
    const data = await response.json();
    setComments(data);
  }

  async function postData(comment: CommentType) {
    await fetch("http://localhost:3001/createComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    fetchData();
  }

  async function seedData() {
    await fetch("http://localhost:3001/createComments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    fetchData();
  }

  async function purge() {
    await fetch("http://localhost:3001/deleteComments", {
      method: "DELETE",
    });
    fetchData();
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (comment: CommentType) => {
    postData(comment);
  };

  return (
    <main>
      <h1>Comments Feed</h1>
      <CommentForm onSubmit={handleSubmit} />
      <div role="feed" aria-label="Comments Feed" aria-atomic="false">
        {[...comments].reverse().map((comment: CommentType) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      <button onClick={seedData}>Seed</button>
      <button onClick={purge}>Purge</button>
    </main>
  );
}

export default App;
