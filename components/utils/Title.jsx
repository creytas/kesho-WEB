import React from "react";

const Title = ({ type, children }) => {
  switch (type) {
    case "h1":
      return <h1>{children}</h1>;

    case "h2":
      return (
        <h2
          style={{
            //   fontFamily: "Roboto",
            width: "73%",
            display: "flex",
            alignItems: "center",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "45px",
            lineHeight: "40px",
            color: "#000",
            //opacity: "0.4",
            //   border: "1px solid #000",
          }}
        >
          <div
            style={{
              width: "82px",
              height: "0px",
              border: "1.7px solid rgba(0, 0, 0, 0.8)",
              marginRight: "2%",
            }}
          />
          {children}
        </h2>
      );

    case "h3":
      return <h3>{children}</h3>;

    default:
      return <div>{children}</div>;
  }
};

export default Title;
