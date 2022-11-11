import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography, TextField, Grid, Button } from "@mui/material";
import "./global.css";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Home() {
  const classes = useStyles();
  const [buscarPorNome, setBuscarPorNome] = React.useState(false);
  const [nomeBusca, setNomeBusca] = React.useState(undefined);
  const [retorno, setRetorno] = React.useState(undefined);

  const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Herique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antônio Miguel", age: 69 },
  ];

  function handleSubmitBusca() {
    if (nomeBusca) {
      let res = pessoas.find((o) => o.name === nomeBusca);
      setRetorno(JSON.stringify(res));
      if (!res) {
        alert("Nome não encontrado");
      }
    } else alert("Por favor, preencha o campo de busca");
  }

  function buscarNomesCompletos() {
    let newArray = pessoas.map((a) => a.name);
    setRetorno(JSON.stringify(newArray));
  }

  function buscarPrimeirosNomes() {
    let newArray = pessoas.map((a) => a.name.split(" ")[0]);
    setRetorno(JSON.stringify(newArray));
  }

  function insertId() {
    for (let i = 0; i < pessoas.length; i++) {
      pessoas[i].id = i;
    }
    setRetorno(JSON.stringify(pessoas));
  }

  function buscarMaiores() {
    var newArray = pessoas.filter(function (p) {
      return p.age >= 18;
    });
    setRetorno(JSON.stringify(newArray));
  }

  function calcularMedia() {
    var stringCalculo = pessoas[0].age;
    let soma = pessoas[0].age;;
    for (let i = 1; i < pessoas.length; i++) {
      stringCalculo = stringCalculo + ' + '  + pessoas[i].age;
      soma = soma + pessoas[i].age;
    }

    stringCalculo = stringCalculo + ' / '  + pessoas.length + ' = ' + soma/pessoas.length;
    setRetorno(stringCalculo);
  }

  return (
    <div>
      <Typography className={classes.title} fontSize={24}>
        Links das atividades
      </Typography>
      <Link to="form" className={classes.linkContainer}>
        <KeyboardReturnIcon />
        <Typography>1. Formulário:</Typography>
        <Typography className={classes.linkDescription}>
          Preencher e exibir
        </Typography>
      </Link>

      <Grid
        onClick={() => {
          setBuscarPorNome(true);
        }}
        className={classes.linkContainer}
      >
        <KeyboardReturnIcon />
        <Typography>2. Manipular array:</Typography>
        <Typography className={classes.linkDescription}>
          Busca por nome
        </Typography>
      </Grid>
      {buscarPorNome && (
        <Grid sx={{ margin: "-10px 0px 20px 0px" }}>
          <TextField
            className={classes.textInput}
            label="Nome"
            size="small"
            onChange={(e) => setNomeBusca(e.target.value)}
          />
          <Button
            sx={{
              backgroundColor: "rgb(211,241,58)",
              color: "rgb(27,27,27)",
              fontWeight: 600,
              marginLeft: "7px",
            }}
            onClick={handleSubmitBusca}
          >
            Buscar
          </Button>
        </Grid>
      )}

      <Grid
        onClick={() => {
          setBuscarPorNome(false);
          buscarNomesCompletos();
        }}
        className={classes.linkContainer}
      >
        <KeyboardReturnIcon />
        <Typography>2. Manipular array:</Typography>
        <Typography className={classes.linkDescription}>
          Retornar nomes completos
        </Typography>
      </Grid>

      <Grid
        onClick={() => {
          setBuscarPorNome(false);
          buscarPrimeirosNomes();
        }}
        className={classes.linkContainer}
      >
        <KeyboardReturnIcon />
        <Typography>2. Manipular array:</Typography>
        <Typography className={classes.linkDescription}>
          Retornar primeiros nomes
        </Typography>
      </Grid>

      <Grid
        onClick={() => {
          setBuscarPorNome(false);
          insertId();
        }}
        className={classes.linkContainer}
      >
        <KeyboardReturnIcon />
        <Typography>2. Manipular array:</Typography>
        <Typography className={classes.linkDescription}>
          Inserir id único
        </Typography>
      </Grid>

      <Grid
        onClick={() => {
          setBuscarPorNome(false);
          buscarMaiores();
        }}
        className={classes.linkContainer}
      >
        <KeyboardReturnIcon />
        <Typography>2. Manipular array:</Typography>
        <Typography className={classes.linkDescription}>
          Buscar maiores de idade
        </Typography>
      </Grid>

      <Grid
        onClick={() => {
          setBuscarPorNome(false);
          calcularMedia();
        }}
        className={classes.linkContainer}
      >
        <KeyboardReturnIcon />
        <Typography>2. Manipular array:</Typography>
        <Typography className={classes.linkDescription}>
          Descobrir média das idades
        </Typography>
      </Grid>

      {retorno && (
        <Grid sx={{ width: "50vw", marginTop: "-20px" }}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {retorno}
          </SyntaxHighlighter>
        </Grid>
      )}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  title: {
    color: "rgb(211,241,58)",
    paddingBottom: "12px",
  },
  linkContainer: {
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "row",
    width: "50vw",
    textDecoration: "none",
    color: "rgb(211,241,58)",
    cursor: "pointer",
  },
  linkDescription: {
    color: "rgb(182,180,180)",
    fontSize: "20",
    paddingLeft: "5px",
  },
  textInput: {
    height: "60px",
    width: "180",
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
}));

export default Home;
