import { useState } from "react";
import "./App.css";

import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [responseData, setResponseData] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5150/api/message")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  // Send data to the backend
  const sendData = () => {
    axios
      .post("http://localhost:5150/api/data", {
        data: "Hello from the frontend!",
      })
      .then((response) => setResponseData(response.data))
      .catch((error) => console.error("Error sending data:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vite React + Express</h1>
      <p>Backend Message: {message}</p>
      <button onClick={sendData}>Send Data to Backend</button>
      {responseData && <p>Backend Response: {JSON.stringify(responseData)}</p>}
    </div>
  );
};

export default App;
