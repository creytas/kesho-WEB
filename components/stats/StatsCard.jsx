import React from "react";
import { Icon } from "@iconify/react";

const StatsCard = ({ icon, title, amount, color }) => {
  return (
    <div
      style={{
        border: `0px solid ${color}`,
        width: "25%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: `${color}`,
      }}
    >
      <Icon icon={icon} style={{ width: "96px", height: "96px" }} />
      <h2
        style={{
          border: "0px solid blue",
          width: "100%",
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        +
        <span
          style={{ borderBottom: `5px solid ${color}`, paddingBottom: "3.5%" }}
        >
          {amount}
        </span>
      </h2>
      <h3
        style={{ border: "0px solid blue", fontSize: "29px", paddingTop: "8%" }}
      >
        {title}
      </h3>
    </div>
  );
};

export default StatsCard;
