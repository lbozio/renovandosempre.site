import Typography from "@mui/material/Typography";

export default function TextoVermelho(props) {
  return (
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: "600",
        color: "#bf0a0a",
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
