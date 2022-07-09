import React from "react";
import StatsCard from "./StatsCard";
const healthCare = "iconoir:healthcare";
const motherNurse = "mdi:mother-nurse";
const handsHelping = "la:hands-helping";
const aim = "ant-design:aim-outlined";

const Stats = () => {
  return (
    <section
      style={{
        border: "0px solid red",
        height: "328px",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.3)",
        padding: "2%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StatsCard
        color="#F17D7D"
        icon={healthCare}
        amount={200}
        title="children cared for"
      />
      <StatsCard
        color="#0FA958"
        icon={motherNurse}
        amount={100}
        title="educated moms"
      />
      <StatsCard
        color="#0099FF"
        icon={handsHelping}
        amount={5}
        title="partners involved"
      />
      <StatsCard color="#FC993D" icon={aim} amount={450} title="achievements" />
    </section>
  );
};

export default Stats;
