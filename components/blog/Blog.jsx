import React from "react";
import TextField from "../title/TextField";

const Blog = () => {
  return (
    <section style={{ height: "906px", padding: "3% 2%" }}>
      <TextField
        width="81%"
        typeOfTitle="h2"
        title="BLOG"
        content="Here is our latest news"
      />
    </section>
  );
};

export default Blog;
