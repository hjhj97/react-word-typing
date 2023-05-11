import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/game");
      }}
    >
      Start Game
    </div>
  );
}

export default Home;
