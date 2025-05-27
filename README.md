# Projeto: App para Internet

Este repositório contém dois sistemas web:

- **Ono Contábil**: Site institucional de uma empresa de contabilidade, com informações sobre serviços, formulário de contato e parcerias.
- **TemQuaseTudo**: Loja virtual fictícia com sistema de cadastro/login, listagem de produtos, carrinho de compras e páginas de produtos.

## Estrutura de Pastas

- `OnoContábil/` — Site institucional da Ono Contábil
  - `html.html` — Página principal
  - `forms.html` — Formulário de orçamento
  - `obrigado.html` — Página de agradecimento
  - `js/` — Scripts JavaScript
  - `styles/` — Estilos CSS
  - `imgs/` — Imagens

- `TemQuaseTudo/` — Loja virtual
  - `html.html` — Página inicial (não logado)
  - `html2.html` — Página inicial (usuário logado)
  - `login.html` — Tela de login
  - `cadastro.html` — Tela de cadastro
  - `carrinho.html` — Carrinho de compras
  - `produtos/` — Páginas de produtos
  - `js/` — Scripts JavaScript
  - `styles/` — Estilos CSS
  - `imgs/` — Imagens dos produtos e anúncios

## Como Usar

1. Abra o projeto em um servidor local (ex: Live Server no VS Code).
2. Acesse `OnoContábil/html.html` para o site institucional.
3. Acesse `TemQuaseTudo/html.html` para a loja virtual.
4. Para testar login/cadastro, use a tela de login/cadastro da loja.

## Funcionalidades

- **Ono Contábil**: Apresentação institucional, formulário de contato, informações de serviços e parcerias.
- **TemQuaseTudo**: Cadastro e login de usuários (armazenados no localStorage), listagem de produtos, carrinho de compras, páginas de detalhes dos produtos.

## Observações
- Não há backend, todo armazenamento é feito no navegador (localStorage).
- Projeto desenvolvido para fins acadêmicos.

---
Desenvolvido para a disciplina de Aplicações para Internet.