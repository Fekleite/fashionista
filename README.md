<h1 align="center">
Fashionista E-commerce
</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Resultado Final

![Captura de tela de 2020-06-08 18-17-58](https://user-images.githubusercontent.com/48728541/84431318-7d93bb80-ac01-11ea-894e-e501da6dcc12.png)

## Tecnologias

- React
- Redux
- Redux Persist

## Cenário

Segundo o levantamento, da Webshoppers (Ebit / Nielsen), os e-commerces brasileiros faturaram cerca de R$ 53,2 bilhões em 2018. O segmento “Moda e Acessórios” representa 5,6% do faturamento no varejo online, ocupando a segunda posição entre as categorias de produtos com mais pedidos, perdendo apenas para o segmento de eletroeletrônicos.

Oferecer a melhor experiência aos usuários que interagem com os produtos no desktop, e principalmente em dispositivos móveis, é fundamental para se manter vivo e competitivo nesse segmento.

## Objetivo

Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

## Regras

- Deve implementar as funcionalidades apresentadas nos wireframes / layouts.
- Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.
- Deve consumir a API do catálogo de produtos.
- O estado global da aplicação deverá ser gerenciado com Redux
- Deve ser um SPA (Single Page Application).
- Todos os produtos da API devem ser exibidos.
- Utilize BEM CSS para escrever os estilos.
- Deve-se fazer deploy do projeto, servindo-o no Netlify.
- Não utilize frameworks CSS como Bootstrap, Foundation e afins.

## Requisitos obrigatórios

- Para cada item do catálogo de produtos as seguintes informações devem estar na página:

  - Imagem
  - Nome
  - Preço
  - Status “Em promoção”
  - Preço promocional (se disponível)
  - Tamanhos disponíveis
  - Selo “Promoção”
  - Deve ser possível adicionar itens por tamanho no carrinho de compras.

- Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.
- Deve ser possível remover itens do carrinho de compras.

## Requisitos opcionais

- O carrinho de compras deve persistir entre reloads de página.
- Alguns produtos não tem todos os tamanhos disponíveis, mostre apenas os tamanhos disponíveis em estoque.
- Implemente a funcionalidade de busca em tempo real.

## Endpoint - Catálogo de Produtos

[API do catálogo de produtos](https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog)

## Background Image

[Background Image - Unsplash](https://unsplash.com/photos/_3Q3tsJ01nc)

## Deploy

[Fashionista E-commerce](https://fekleite-fashionista.netlify.app/)

## Getting started

Clonando o repositório:
```
$ git clone https://github.com/Fekleite/fashionista.git
$ cd fashionista
```

Instalando as dependêcias:
```
$ npm install
```

Iniciando a aplicação:
```
$ npm start ou yarn start
```

## Licença

Este projeto está licenciado sob a licença MIT - consulte a página [LICENSE] (https://opensource.org/licenses/MIT) para obter detalhes.


<br>
<br>
<br>
<br>

**Um projeto feito durante o AceleraDev React Online da [Codenation](https://www.codenation.dev/)**
