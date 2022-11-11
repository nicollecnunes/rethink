import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, TextField, Stack, Button } from "@mui/material";
import "./global.css";

function Form() {
  const classes = useStyles();
  const [modoExibicao, setModoExibicao] = React.useState(false);
  const [nome, setNome] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [idade, setIdade] = React.useState(undefined);
  const [profissao, setProfissao] = React.useState(undefined);
  const [telefone, setTelefone] = React.useState(undefined);
  const [dataPreenchimento, setDataPreenchimento] = React.useState(undefined);

  function handleSubmit() {
    setDataPreenchimento(new Date());
    if (nome && email && profissao && telefone && idade) setModoExibicao(true);
    else alert("Por favor, preencha todos os campos");
  }

  return (
    <div>
      <Typography className={classes.title} fontSize={24}>
        Formulário
      </Typography>

      {!modoExibicao ? (
        <Stack className={classes.inputContainer}>
          <TextField
            className={classes.textInput}
            label="Nome"
            size="small"
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            className={classes.textInput}
            label="Idade"
            size="small"
            type="number"
            onChange={(e) => setIdade(e.target.value)}
          />
          <TextField
            className={classes.textInput}
            label="Profissão"
            size="small"
            onChange={(e) => setProfissao(e.target.value)}
          />
          <TextField
            className={classes.textInput}
            label="E-mail"
            size="small"
            type="mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.textInput}
            label="Telefone"
            size="small"
            type="phone"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(211,241,58)",
              color: "rgb(27,27,27)",
              fontWeight: 600,
            }}
            onClick={handleSubmit}
          >
            Revisar dados
          </Button>
        </Stack>
      ) : (
        <>
          <Typography className={classes.dataTitle}>Nome</Typography>
          <Typography className={classes.data}>{nome}</Typography>

          <Typography className={classes.dataTitle}>E-mail</Typography>
          <Typography className={classes.data}>{email}</Typography>

          <Typography className={classes.dataTitle}>Profissão</Typography>
          <Typography className={classes.data}>{profissao}</Typography>

          <Typography className={classes.dataTitle}>Idade</Typography>
          <Typography className={classes.data}>{idade}</Typography>

          <Typography className={classes.dataTitle}>Telefone</Typography>
          <Typography className={classes.data}>{telefone}</Typography>

          <Typography className={classes.dataTitle}>
            Data de preenchimento
          </Typography>
          <Typography className={classes.data}>
            {dataPreenchimento.toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </>
      )}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  title: {
    color: "rgb(211,241,58)",
    paddingBottom: "12px",
  },
  inputContainer: {
    width: "36vw",
  },
  textInput: {
    height: "60px",
    "& input + fieldset": {
      borderColor: "white",
      color: "white",
    },
    "& input:focus + fieldset": {
      borderColor: "white",
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& input": {
      color: "white",
    },
  },
  dataTitle: {
    "&.MuiTypography-root": {
      fontWeight: 400,
      color: "rgb(211,241,58)",
      fontSize: 18,
    },
  },
  data: {
    "&.MuiTypography-root": {
      color: "rgb(182,180,180)",
      fontSize: 15,
      paddingBottom: "16px",
    },
  },
}));

export default Form;
