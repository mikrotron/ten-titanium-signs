import React from "react";

function App() {
  const [data, setData] = React.useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:3001/getComments");
    const data = await response.json();
    setData(data);
  }

  async function postData() {
    const mockComment = {
      name: "Horatio Bolivar",
      message: "This is a comment",
    };

    await fetch("http://localhost:3001/createComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mockComment),
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

  const handlePost = () => {
    postData();
  };

  const handlePurge = () => {
    purge();
  };

  return (
    <main>
      <h1>Comments Feed</h1>
      <button onClick={handlePost}>Post Mock Comment</button>
      <button onClick={handlePurge}>Purge</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default App;
