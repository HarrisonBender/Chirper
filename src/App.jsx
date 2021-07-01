import React, { useState } from "react";

let App = () => {
  let [username, setUsername] = useState("");
  let [message, setMessage] = useState("");
  let [chirps, setChirps] = useState([
    { username: "Harrison", message: "Hi" },
    { username: "Olivia", message: "Hello" },
    { username: "Katie", message: "Hey" },
  ]);

  let handleSubmit = (e) => {
    e.preventDefault();
    let newChirp = {
      username: username,
      message: message,
    };

    setChirps([...chirps, newChirps]);
  };
  return (
    <>
      <div className="container chirps-body">
        <form>
          <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <input type="submit" placeholder="Post Message" onClick={(e) => handleSubmit(e)} />
        </form>
      </div>
      {chirps.map((chirp, id) => {
        return (
          <>
          <div>
            <p>{chirp.username}</p>
            <h4>{chirp.message}</h4>
            </div>
          </>
        );
      })}
    </>
  );
};

export default App;
