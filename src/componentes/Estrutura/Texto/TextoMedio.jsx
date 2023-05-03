import Typography from "@mui/material/Typography";

export default function TextoMedio(props) {
  return (
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: "600",
        color: "#2f2f2f",
        lineHeight: "1.2",
      }}
    >
      {props.children}
    </Typography>
  );
}
