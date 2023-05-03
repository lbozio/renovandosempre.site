import Typography from "@mui/material/Typography";

export default function TextoVermelho(props) {
  return (
    <Typography
      sx={{
        fontSize: "35px",
        fontWeight: "600",
        color: "#4F9A68",
        lineHeight: "1.2",
      }}
    >
      <br />
      {props.children}
      <br />
      <br />
    </Typography>
  );
}
