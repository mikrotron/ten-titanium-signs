import React from "react";
import CommentForm from "@/components/CommentForm/CommentForm";
import CommentFeed from "@/components/CommentFeed/CommentFeed";
import useComments from "@/hooks/useComments";
import { Button } from "../Primatives/Primatives.styles";
import { ResetStyles, Header, Main, Footer } from "./App.styles";

function App() {
  const { create, seed, purge } = useComments();

  return (
    <>
      <ResetStyles />
      <Header>
        <h1>🥔 Commentater</h1>
      </Header>
      <Main>
        <CommentForm onSubmit={create} />
        <aside>
          <CommentFeed />
        </aside>
      </Main>
      <Footer aria-label="secret utilities">
        <Button onClick={seed}>Seed</Button>
        <Button onClick={purge}>Purge</Button>
      </Footer>
    </>
  );
}

export default App;
