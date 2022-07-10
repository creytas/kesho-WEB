import React from "react";
import TextField from "../utils/TextField";

const Gallery = () => {
  return (
    <section
      style={{ backgroundColor: "#fff", padding: "3% 2%", height: "883px" }}
    >
      <TextField
        width="103%"
        typeOfTitle="h2"
        title="GALLERY"
        content="This worth a thousand words"
      />
      <p style={{ margin: "1% auto", fontSize: "20px", width: "82%" }}>
        Et et est atque enim explicabo facilis. Molestiae nesciunt dolorem
        deserunt esse fuga. Autem quae et porro non pariatur quidem molestiae.
        Rem totam aliquid debitis exercitationem minima ipsam nulla quam
        ducimus.
      </p>
      <div
        style={{
          border: "0px solid red",
          display: "flex",
          flexWrap: "wrap",
          width: "85%",
          margin: "3% auto",
        }}
      >
        <img
          src="/img/image_13.png"
          alt="gallery"
          style={{ width: "30%", margin: "1%" }}
        />
        <img
          src="/img/image_24.png"
          alt="gallery"
          style={{ width: "30%", margin: "1%" }}
        />
        <img
          src="/img/image_26.png"
          alt="gallery"
          style={{ width: "30%", margin: "1%" }}
        />
        <img
          src="/img/image_17.png"
          alt="gallery"
          style={{ width: "30%", margin: "1%" }}
        />
        <img
          src="/img/image_20.png"
          alt="gallery"
          style={{ width: "30%", margin: "1%" }}
        />
        <img
          src="/img/image_27.png"
          alt="gallery"
          style={{
            width: "30%",
            height: "238px",
            objectFit: "cover",
            margin: "1%",
          }}
        />
      </div>
    </section>
  );
};

export default Gallery;
