import Title from "./Title";

const TextField = ({ typeOfTitle, title, content, width }) => {
  return (
    <div style={{ padding: "1%", width: `${width}` }}>
      <Title type={typeOfTitle}>{title}</Title>
      <p
        style={{
          width: "79%",
          fontWeight: "900",
          border: "0px solid #000",
          fontSize: "55px",
          color: "#000",
          textAlign: "right",
          textShadow: "0px 0px 8px rgba(0,0,0,0.25)",
          background: "transparent",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default TextField;
