import Typography from "@mui/material/Typography";

export default function TextoPequeno(props) {
  return (
    <Typography
      sx={{
        fontSize: "15px",
        fontWeight: "400",
        color: "#2f2f2f",
        lineHeight: "1.2",
      }}
    >
      {props.children}
      <br />
    </Typography>
  );
}
