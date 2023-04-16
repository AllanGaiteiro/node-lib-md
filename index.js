import chalk from "chalk";
import fs from "fs";

function pegaArquivo(caminho) {
  const encoding = "utf-8";
  fs.readFile(caminho, encoding, (_, texto) => {
    console.log(chalk.green(texto));
  });
}

pegaArquivo("./arquivos/texto.md");
