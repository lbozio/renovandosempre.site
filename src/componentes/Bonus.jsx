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
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "40%", // height for tablet devices and up
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    height: "70%", // height for desktop devices and up
  },
}));

export default function Bonus() {
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={12}>
              <Typography color="#9F9F9F" variant="h6" fontWeight="bold">
                ESPECIAL
              </Typography>
              <br />

              <Typography color={"#4F9A68"} variant="h4" fontWeight={"bold"}>
                + 3 Bônus Exclusivos
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Garantindo hoje seu acesso ao Livro Truque Da Banana Para Secar
                você irá garantir 3 bônus incríveis:
                <br /> O bônus Suporte Premium + Método Antiflacidez + Coleção
                Especial: 25 Receitas Deliciosas de forma TOTALMENTE gratuita!
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <StyledImage
                component="img"
                src="bonus.png"
                alt="Image description"
              />
              <Typography variant="subtitle1">
                1 Bônus exclusivo:{" "}
                <strong>
                  <s>(Valor R$ 197)</s>
                </strong>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
