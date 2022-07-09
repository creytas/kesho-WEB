import React from "react";
import TextField from "../title/TextField";

const About = () => {
  return (
    <section style={{ padding: "3% 2%" }}>
      <TextField
        typeOfTitle="h2"
        title="ABOUT"
        content="Who are we?"
        width="57%"
      />
    </section>
  );
};

export default About;
