import { useState } from "react";
import MainContainer from "./MainContainer";

const App = () => {
  const [realistic, setRealistic] = useState(false);

  return (
    <>
      <MainContainer realistic={realistic} />
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setRealistic(!realistic)}
          style={{
            padding: "10px 16px",
            fontSize: "14px",
            borderRadius: "8px",
            background: "#111",
            color: "#fff",
            border: "1px solid #fff",
            cursor: "pointer",
            boxShadow: "0 0 10px #fff",
          }}
        >
          Toggle Scale Mode ({realistic ? "Realistic" : "Artistic"})
        </button>
      </div>
    </>
  );
};

export default App;
