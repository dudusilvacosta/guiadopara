"use client";

import React from "react";

type Produto = {
  nome: string;
  id: number;
};

export default function ClientFetch() {
  const [data, setData] = React.useState<Produto[]>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://api.origamid.online/produtos");
      const json = (await response.json()) as Produto[];
      setData(json);
    }
    fetchProducts();
  }, []);

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
