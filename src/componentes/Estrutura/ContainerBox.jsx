import * as React from "react";
import Box from "@mui/material/Box";
export default function ContainerBox(props) {
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
          width: "90%",
        }}
      >
        <Box>{props.children}</Box>
      </div>
    </div>
  );
}
