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
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "70%", // height for tablet devices and up
  },
}));

export default function Garantia() {
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={6}>
              <StyledImage
                component="img"
                src="garantia.png"
                alt="Image description"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color={"#4F9A68"} variant="h5" fontWeight="bold">
                O SEU RISCO É ZERO!
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Se você ainda está com dúvidas se vai gostar ou vai se adaptar
                ao conteúdo do livro, vou tornar essa decisão bem mais fácil
                para você…
              </Typography>
              <Typography variant="subtitle1">
                Tenho tanta confiança que você vai amar os resultados que terá
                com o livro que vou dar a você uma garantia de incondicional de
                30 dias. Você compra, começa seu processo de perda de peso e se,
                em 30 dias, você não tiver gostado do livro ou não começar a ter
                resultados, basta enviar um único e-mail para o nosso suporte e
                nós devolveremos 100% do seu dinheiro investido.
              </Typography>
              <Typography variant="subtitle1">
                Simples assim, sem burocracias e falsas promessas. Você pode
                experimentar por 30 dias. Essa é a minha garantia incondicional
                para você.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
