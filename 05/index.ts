const palavra: string = "programador";

const soletrando = (letras: string): string => {
  return letras.split("").join("-");
};

console.log(soletrando(palavra));
