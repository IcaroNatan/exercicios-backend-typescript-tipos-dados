let item: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
};

item = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const imprimeEtiquetas = (objeto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}) => {
  let contador: number = 1;

  let resultado: string[] = [];
  while (contador <= objeto.qtd) {
    resultado.push(
      `${objeto.lote}-${objeto.ano}-${contador.toString().padStart(3, "0")}`
    );
    contador++;
  }
  return resultado;
};

console.log(imprimeEtiquetas(item));
