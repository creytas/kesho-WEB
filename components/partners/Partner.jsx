import Link from "next/link";
import React from "react";
const img1 = "/img/image_40.png";
const img2 = "/img/image_41.png";
const img3 = "/img/image_42.png";
const img4 = "/img/image_43.png";
const img5 = "/img/image_44.png";
const img6 = "/img/image_45.png";
const img7 = "/img/image_46.png";
const img8 = "/img/image_47.png";
const img9 = "/img/image_48.png";

const Partner = () => {
  return (
    <section
      style={{
        height: "750px",
        background: "#fff",
        padding: "3% 2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2
        style={{ fontSize: "55px", display: "flex", justifyContent: "center" }}
      >
        We are also honored to work with
      </h2>
      <div
        style={{
          border: "0px solid red",
          display: "flex",
          flexWrap: "wrap",
          width: "75%",
          margin: "3% auto",
        }}
      >
        <img src={img6} alt="partner" style={{ width: "16%", margin: "2%" }} />
        <img
          src={img1}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img
          src={img3}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img
          src={img4}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img
          src={img5}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img
          src={img2}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img
          src={img7}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img
          src={img8}
          alt="partner"
          style={{ width: "15%", margin: "2.5%" }}
        />
        <img src={img9} alt="partner" style={{ margin: "2.5%" }} />
      </div>
      <span
        style={{
          border: "0px solid red",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "45px",
          fontWeight: "700",
        }}
      >
        Want to part of the team?{" "}
        <Link href="/donate">
          <a style={{ color: "#0FA958" }}>Just join US</a>
        </Link>
      </span>
    </section>
  );
};

export default Partner;
