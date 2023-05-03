import Typography from "@mui/material/Typography";

export default function TextoGrande(props) {
  return (
    <Typography
      sx={{
        fontSize: "35px",
        fontWeight: "900",
        color: "#2f2f2f",
        lineHeight: "1.2",
      }}
    >
      {props.children}
    </Typography>
  );
}
