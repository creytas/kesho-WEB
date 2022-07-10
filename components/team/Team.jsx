import React from "react";
import TextField from "../utils/TextField";
const background = "/img/background.png";

const Team = () => {
  return (
    <section
      style={{
        padding: "3% 2%",
        height: "776px",
        background: `right no-repeat url(${background})`,
        border: "0px solid red",
        filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.6))",
      }}
    >
      <TextField
        typeOfTitle="h2"
        title="TEAM"
        content="We love what we are building"
        width="98%"
      />
    </section>
  );
};

export default Team;
