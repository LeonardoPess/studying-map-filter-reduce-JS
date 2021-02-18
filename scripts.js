
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
]

const precosFilter = precos.filter((preco) => preco.includes("R$"));

const precoNumeros = precosFilter.map((preco) => 
  Number(preco.replace("R$ ", ""))
);

const total = precoNumeros.reduce((acc, item) => acc + item);

console.log(total);
