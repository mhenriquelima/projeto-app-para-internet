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

## Funcionalidades — Ono Contábil

| Funcionalidade                | Descrição                                                                 |
|------------------------------|---------------------------------------------------------------------------|
| Apresentação Institucional   | Página inicial com informações sobre a empresa e sua missão.              |
| Serviços Oferecidos          | Lista detalhada dos serviços contábeis disponíveis.                       |
| Formulário de Orçamento      | Permite que clientes solicitem orçamento de serviços online.              |
| Página de Agradecimento      | Confirmação visual após envio de solicitação de orçamento.                |
| Contato                      | Informações de endereço, telefone e e-mail para contato direto.           |
| Parcerias                    | Seção dedicada a empresas parceiras, com links e logos.                   |
| Navegação Dinâmica           | Menu de navegação para alternar entre seções sem recarregar a página.     |

Essas funcionalidades garantem uma experiência completa para visitantes e potenciais clientes da Ono Contábil.

## Funcionalidades — TemQuaseTudo

| Funcionalidade              | Descrição                                                                 |
|----------------------------|---------------------------------------------------------------------------|
| Cadastro de Usuário        | Permite que novos usuários criem uma conta na loja virtual.               |
| Login/Logout               | Autenticação de usuários para acesso a funcionalidades exclusivas.         |
| Listagem de Produtos       | Exibe os produtos disponíveis para compra, com imagens e preços.          |
| Página de Detalhes         | Página individual com informações detalhadas de cada produto.             |
| Carrinho de Compras        | Adiciona, remove e atualiza a quantidade de produtos no carrinho.         |
| Finalização de Compra      | Simulação de processo de compra (sem integração real de pagamento).       |
| Barra de Pesquisa          | Permite pesquisar produtos na loja.                                       |
| Anúncios/Parcerias         | Exibição de banners de parceiros e anúncios na interface.                 |
| Navegação entre páginas    | Links e menus para facilitar a navegação entre as seções do site.         |

Essas funcionalidades proporcionam uma experiência completa de navegação e compra simulada na loja TemQuaseTudo.

## Observações
- Não há backend, todo armazenamento é feito no navegador (localStorage).
- Projeto desenvolvido para fins acadêmicos.

---
Desenvolvido para a disciplina de Aplicações para Internet.