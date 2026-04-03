type Produto = {
  nome: string;
  id: number;
};

export default async function ServerFetch() {
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      cache: "no-store", // garante sempre dados frescos (importante no Netlify)
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data = (await response.json()) as Produto[];

    return (
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    );
  } catch {
    return <p>Erro ao carregar produtos.</p>;
  }
}
