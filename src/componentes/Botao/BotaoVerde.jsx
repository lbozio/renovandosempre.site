import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  width: "350px",
  height: "50px",
  fontSize: "18px",
  borderRadius: "25px",
  backgroundColor: "#4F9A68",
  "&:hover": {
    backgroundColor: "#4F9A68",
  },
}));

export default function BotaoVerde(props) {
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
        <ColorButton variant="contained">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="call-to-action-link"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            {props.texto}
          </a>
        </ColorButton>
      </div>
    </div>
  );
}
