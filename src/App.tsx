import React from "react";

interface Comment {
  name: string;
  message: string;
  [key: string]: string;
}

function App() {
  const [data, setData] = React.useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:3001/getComments");
    const data = await response.json();
    setData(data);
  }

  async function postData(comment: Comment) {
    await fetch("http://localhost:3001/createComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
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

  const handlePurge = () => {
    purge();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const comment: Comment = {} as Comment;
    for (const [key, value] of data.entries()) {
      comment[key] = String(value);
    }
    postData(comment);
  };

  return (
    <main>
      <h1>Comments Feed</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input type="text" id="name" name="name" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea id="message" name="message" />
          </div>
        </div>
        <button type="submit">Post</button>
      </form>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handlePurge}>Purge</button>
      <hr />
      <p>
        {`
        ${new Date().toLocaleString("en", {
          weekday: "long",
        })}
        at
        ${new Date().toLocaleString("en", {
          hour: "numeric",
          minute: "numeric",
        })}
        `}
      </p>
      <p>
        <small>— or —</small>
      </p>
      <p>
        {new Date().toLocaleString("en", {
          day: "numeric",
          month: "long",
          hour: "numeric",
          minute: "numeric",
        })}
      </p>
    </main>
  );
}

export default App;
