export default function Home() {
  return (
    <div style={{padding: "1rem"}}>
      <p>
        Este sistema foi desenvolvido durante meus estudos com o framework
        Next.js, com o objetivo de aplicar na prática conceitos de organização
        de código, rotas dinâmicas e consumo de dados. A proposta do projeto é
        funcionar como um guia digital de lugares, oferecendo uma navegação
        simples e visualmente atrativa.
      </p>

      <p>
        O layout do sistema foi inspirado em redes sociais, especialmente no
        formato do Instagram, priorizando o uso de imagens como principal
        elemento de interação. Na tela inicial, são exibidas fotos que
        representam diferentes categorias de locais, facilitando a exploração do
        conteúdo de forma intuitiva.
      </p>

      <p>
        Ao selecionar uma categoria, o usuário é direcionado para uma lista de
        lugares relacionados. Cada item dessa lista pode ser acessado
        individualmente, levando a uma página dedicada com mais detalhes sobre o
        local escolhido.
      </p>

      <p>
        Como solução para a ausência de um serviço próprio de hospedagem de
        imagens e também devido a questões relacionadas a direitos autorais, foi
        adotada a estratégia de incorporar conteúdos diretamente do Instagram.
        Dessa forma, ao acessar um local específico, o sistema exibe um embed de
        uma publicação — geralmente proveniente da conta oficial do
        estabelecimento — garantindo conteúdo visual relevante e atualizado.
      </p>

      <p>
        Essa abordagem permitiu enriquecer a experiência do usuário sem a
        necessidade de gerenciar armazenamento de mídia ou lidar com
        licenciamento de imagens, além de manter o sistema mais leve e prático
        de manter.
      </p>

      <p>
        O projeto faz parte do meu portfólio e representa uma etapa importante
        do meu aprendizado em desenvolvimento web, demonstrando a aplicação de
        conceitos modernos com foco em usabilidade, organização e soluções
        criativas para limitações reais.
      </p>
    </div>
  );
}
