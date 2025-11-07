# # reciclagem

# Web-Mobile-Reciclagem

# Identificação do Problema
• O grupo reconheceu a crescente geração de lixo eletrônico e o impacto
ambiental causado pelo descarte incorreto.
• A necessidade de conscientizar e orientar a população sobre como descartar
corretamente esses resíduos surgiu como ponto central.
Pesquisa Inicial
• Foram levantadas informações sobre impactos à saúde e ao meio ambiente,
além de legislações e políticas públicas sobre descarte de eletrônicos.
• Também se analisou exemplos de sites de coleta seletiva e campanhas
governamentais.
Definição do Público-Alvo
• Cidadãos comuns que possuem aparelhos eletrônicos sem uso.
• Pessoas que não têm conhecimento sobre pontos de coleta ou sobre os riscos
do descarte incorreto.
Geração de Ideias
• Criar uma página simples, de fácil acesso, explicando o que é lixo eletrônico,
seus impactos e como descartá-lo.
• Incluir um mapa ou lista de pontos de coleta próximos.
• Destacar também os benefícios da reciclagem.

# Caráter Extensionista
Este projeto busca:
- Levar conhecimento científico e ambiental da sala de aula para a comunidade.
- Promover a conscientização sobre sustentabilidade.
- Ensinar de forma prática como descartar eletrônicos.
- Oferecer um formulário de contato para que a comunidade possa tirar dúvidas ou denunciar descartes irregulares.
Ou seja, conecta educação + tecnologia + impacto social.


# Tutorial HTML, CSS e JavaScript

Header (Cabeçalho)
HTML:
• Contém o título principal do site.
• Inclui uma barra de navegação (<nav>) com links:
o Página Inicial
o Como Descartar
o Pontos de Coleta
o Contato
CSS:
• Fundo verde claro (#1bd39d).
• Links em negrito, pretos, que mudam para azul ao passar o mouse.
• Navegação organizada com Flexbox, centralizando os itens e aplicando espaçamento.
Função: Exibir o título e apresentar o menu principal de navegação da página.
________________________________________
Main (Conteúdo Principal)
HTML:
• Contém várias seções:
o Explicação sobre o descarte consciente do lixo eletrônico.
o Lista com impactos ambientais e na saúde.
o Lista ordenada com passos para descartar corretamente.
o Lista personalizada com marcador de localização para pontos de coleta.
o Benefícios da reciclagem.
o Botão “Saiba Mais” → redireciona para a página de descarte.
o Botão “Entre em Contato” → abre o formulário em nova janela.
o Jogo interativo de arrastar e soltar, onde o usuário coloca os itens nas lixeiras corretas.
CSS:
• Uso de Flexbox para organizar o conteúdo em colunas em telas grandes.
• .conteudo ocupa até 65% da largura.
• Listas não ordenadas usam marcadores personalizados (em vez de padrão).
• Estilo do formulário (contato.html): fundo branco, bordas arredondadas, sombra.
• Estilo do jogo:
o Itens arrastáveis representados por ícones grandes.
o Lixeiras com borda tracejada.
Função: Apresentar as informações principais do site de forma clara, organizada e interativa.
________________________________________
Footer (Rodapé)
HTML:
• Contém apenas texto simples com créditos dos desenvolvedores.
CSS:
• Fundo verde (#1bd39d), igual ao cabeçalho.
• Texto centralizado.
• Fonte menor, diferenciando do conteúdo principal.
Função: Identificar o rodapé da página e exibir os créditos dos criadores.
________________________________________
Responsividade
Até 900px de largura:
• main muda para layout vertical (coluna).
• .conteudo passa a ocupar 100% da largura.
Até 500px de largura:
• header muda para layout vertical, com menos espaçamento.
• Links do menu exibidos em coluna e centralizados.
• .imagem (quando usada) ocupa toda a largura e altura reduzida para telas pequenas.
Layout adaptável a diferentes tamanhos de tela.
________________________________________
JavaScript (Interatividade)
• Botão “Saiba Mais”: redireciona para a página “Como Descartar”.
• Botão “Entre em Contato”: abre formulário em nova janela (popup).
• Jogo de Arrastar e Soltar:
o Itens: celular, notebook, garrafa plástica.
o Cada item tem um tipo definido (eletrônico ou plástico).
o Lixeiras aceitam apenas um tipo de item.
o Se o usuário soltar no local correto → mensagem verde: “Acertou! Bom descarte!”.
o Se errar → mensagem vermelha: “Lixeira errada! Tente de novo.”
o Acerto remove o item da tela.
Função: Tornar o site mais dinâmico, educativo e interativo.

# Conclusão e Aprendizados
Ao longo do desenvolvimento do projeto, conseguimos:
• Trabalhar com HTML, CSS e JavaScript de maneira integrada, entendendo como cada linguagem contribui para o resultado final.
• Perceber a importância da ideação e da prototipagem, que ajudaram a organizar as ideias antes de começar a implementação.
• Vivenciar na prática o caráter extensionista, levando tecnologia, sustentabilidade e conscientização para além da sala de aula.
• Combinar educação ambiental com ferramentas digitais interativas, tornando o aprendizado mais atrativo.
No fim, o resultado foi um site educativo que não apenas informa e conscientiza, mas também engaja o usuário de forma divertida e prática.

# Tutorial React, Next.js e CSS
# Páginas (Home, Descarte e Contato) — React/Next.js
• Criadas com componentes funcionais (HomePage, DescartePage, ContatoPage).
• Usam JSX, que permite escrever HTML dentro do JavaScript.
• A página Home apresenta informações sobre o descarte de lixo eletrônico, lista impactos ambientais e inclui um mini jogo educativo.
• A página Descarte explica como descartar corretamente, com uma lista de boas práticas.
• A página Contato contém um formulário com campos de nome, e-mail e mensagem.
• Botões interativos:
o “Saiba Mais” usa router.push("/descarte") para navegar sem recarregar a página.
o “Entre em Contato” abre a página de contato em nova aba com window.open("/contato", "_blank").
• A função handleDrop() exibe mensagens conforme a escolha correta ou errada no jogo (“Acertou!” ou “Lixeira errada!”).
• Utiliza hooks do React (useState, useRouter) para controlar mensagens e navegação.
________________________________________
# CSS (Estilos e Layout)
# Estrutura geral:
• Define aparência e layout da página com Flexbox e variáveis CSS.
• Utiliza responsividade e suporte a modo escuro.
# Layout principal (.page, .main, .intro, .ctas):
• .page: centraliza o conteúdo, define fundo e fonte geral.
• .main: cria o contêiner branco central com espaçamento e bordas arredondadas.
• .intro: organiza o título e parágrafo principais.
• .ctas: estiliza botões com bordas arredondadas e efeitos de hover.
• Responsivo para telas menores (@media (max-width: 600px)) e compatível com modo escuro (@media (prefers-color-scheme: dark)).
# Estrutura HTML geral:
• body: remove margens, define fonte padrão e cor de fundo cinza-claro (#f5f5f5).
• header: cria um cabeçalho verde claro (#1bd39d), com título e navegação centralizados.
• .header ul: organiza os links com Flexbox, centralizando e aplicando espaçamento.
• .header a: links em negrito e pretos, que mudam para azul ao passar o mouse.
• main: define a área principal com conteúdo centralizado e espaçamento entre seções.
• .conteudo: caixa branca com bordas arredondadas e sombra suave para destacar o conteúdo.
• ul.custom: remove marcadores e adiciona ícone de 📍 antes de cada item.
• .footer: rodapé verde claro com texto centralizado e fonte menor.
• Responsivo:
o Até 900px: o conteúdo passa a ficar em coluna.
o Até 500px: o menu do cabeçalho se adapta para uma coluna vertical.

# Vantagens Da Migração
A migração para o Next.js traz diversas melhorias para o projeto. Com a nova estrutura, o site ficou mais organizado e fácil de manter, já que cada parte foi dividida em componentes reutilizáveis. Além disso, a navegação se tornou mais rápida e fluida, sem a necessidade de recarregar a página a cada clique. Outro ponto positivo é a adaptação automática do layout para diferentes tamanhos de tela, garantindo uma boa experiência tanto no computador quanto no celular. Por fim, o Next.js contribui para um melhor desempenho e posicionamento nos buscadores, tornando o projeto mais moderno e eficiente.


Nomes e Ra:  
João Vitor Gonçalves / 10737592
Enzo Carvalho Pagliarini / 10425707
Alex Cardoso Oliveira / 10736415
Guilherme Gomes Ferransi / 10403372
 
