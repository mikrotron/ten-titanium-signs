import React from "react";
import CommentForm from "@/components/CommentForm/CommentForm";
import CommentFeed from "@/components/CommentFeed/CommentFeed";
import useComments from "@/hooks/useComments";

function App() {
  const { postData, seedData, purge } = useComments();

  return (
    <>
      <header>
        <h1>Commentator</h1>
      </header>
      <main>
        <CommentForm onSubmit={postData} />
      </main>
      <aside>
        <CommentFeed />
      </aside>
      <footer>
        <hr />
        <button onClick={seedData}>Seed</button>
        <button onClick={purge}>Purge</button>
      </footer>
    </>
  );
}

export default App;
