import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "não ha arquivo no dietorio"));
}
function pegaArquivo(caminho) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminho, encoding)
    .then((texto) => {
      console.log(chalk.green(texto));
    })
    .catch(trataErro);
}

pegaArquivo("./arquivos/texto.md");
