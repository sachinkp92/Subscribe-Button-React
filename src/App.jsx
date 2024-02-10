import { useState } from "react";
import "./App.css";

function App() {
  const [isSubscribed, setisSubscribed] = useState(0);
  let onSubscribe = () => {
    isSubscribed ? setisSubscribed(0) : setisSubscribed(1);
  };
  return (
    <>
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={onSubscribe}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </>
  );
}

export default App;
