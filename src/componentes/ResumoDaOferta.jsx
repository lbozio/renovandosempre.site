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

export default function ResumoDaOferta() {
  return (
    <div
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <Item>
        <Box>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={6}>
              <img src="livro.png" alt="Livro" width={300} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color={"#4F9A68"} variant="h5" fontWeight="bold">
                Protocolo Zero Barriga Completo
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Se você já tentou emagrecer fazendo exercícios físicos ou dietas
                restritivas, eu tenho certeza de que você não conseguiu, não é
                mesmo!? E isso acontece porque você não está atacando a
                verdadeira causa raiz do ganho de peso. Existe um nutriente
                secreto que foi descoberto por um doutor americano que é capaz
                de ativar a queima de gordura automática no nosso corpo que é
                capaz de derreter quilos e quilos de banha em poucas semanas,
                sem precisar de exercícios ou dietas restritivas. Enquanto você
                não ativar esse nutriente, será impossível queimar gordura,
                mesmo que você faça dietas, horas e horas de exercícios ou tome
                pílulas milagrosas...
              </Typography>
              <Typography variant="subtitle1">
                Você provavelmente tem uma amiga que pode comer de tudo e nunca
                engorda, né? Enquanto pessoas você come igual um passarinho e já
                engorda 1 quilo... Isso acontece porque essas pessoas que nunca
                engordam mesmo comendo o que querem, possuem esse nutriente
                ativo em seus corpos, o que faz com que a gordura ingerida ao
                comer sempre seja queimada automaticamente. Dessa forma, o ganho
                de peso é bloqueado completamente!
              </Typography>
              <Typography variant="subtitle1">
                Reuni no <strong> Protocolo Zero Barriga</strong>, o ritual
                matinal que é capaz de eliminar quilos e quilos de gordura do
                seu corpo, fazendo você ativar a queima de gordura automática 24
                horas por dia.
                <br />{" "}
                <s>
                  <strong>(Valor R$ 97)</strong>
                </s>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Item>
    </div>
  );
}
