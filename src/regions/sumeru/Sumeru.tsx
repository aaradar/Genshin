//import { useState } from "react";
import { Background } from "../../Background";
import NavBar from "../../navigation/NavBar";

function Sumeru() {
  return (
    <div>
      <NavBar />
      <div>
        <header>
          <h1>Zhongli Piano</h1>
        </header>
        <div>
          <Background />
        </div>
      </div>
    </div>
  );
}

export default Sumeru;
