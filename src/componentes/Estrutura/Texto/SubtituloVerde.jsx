import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SubtituloVerde(props) {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "80%",
        }}
      >
        <Box>
          <br />
          <Typography color={"#4F9A68"} variant="h4" fontWeight="bold">
            {props.texto}
          </Typography>
          <br />
        </Box>
      </div>
    </div>
  );
}
