import { TextField } from "@mui/material";
import styled from "styled-components";

const CustomedTextField = styled(TextField)({
  color: "white",
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});
export default CustomedTextField;
