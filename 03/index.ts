const lista: number[] = [1, 5, 2];

const tabuada = (array: number[]): string => {
  let resultado: string = "";
  for (let numero of array) {
    for (let i = 0; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}\n`;

      if (i === 10) {
        resultado += "------------ \n";
      }
    }
  }

  return resultado;
};

console.log(tabuada(lista));
