import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  elevation: 8,
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  width: "80%",
}));

const StyledImage = styled(Box)(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "200px", // default height
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    height: "40%", // height for tablet devices and up
  },
  [theme.breakpoints.up("md")]: {
    height: "70%", // height for desktop devices and up
  },
}));

export default function AncoragemDePreco() {
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={12}>
              <Typography color="#9F9F9F" variant="h6">
                <s>VALOR TOTAL DE R$ 97,00 </s>
                <br />
                <s>POR R$ 59,00</s>
              </Typography>
              <br />

              <Typography variant="h4" fontWeight={"bold"}>
                MAS HOJE POR R$ 12X DE R$ 5,92
              </Typography>
              <Typography variant="h6" fontWeight={"bold"}>
                OU R$ 59,00 À VISTA
              </Typography>
              <br />
              <Typography color={"#4F9A68"} variant="h5" fontWeight={"bold"}>
                Tenha acesso ao combo completo com desconto hoje
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="livro.png" alt="Livro" width={300} />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledImage
                component="img"
                src="bonus.png"
                alt="Image description"
              />
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
