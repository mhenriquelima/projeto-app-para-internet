  document.getElementById('carrinho-botao').onclick = function() {
    window.location.href = "carrinho.html";
  };

  function adicionarCarrinho(event, produtoNome) {
    event.stopPropagation(); 
    const lista = document.getElementById('carrinho-lista');

    let jaAdicionado = false;
    for (let item of lista.children) {
      if (item.dataset.nome === produtoNome) {
        jaAdicionado = true;
        break;
      }
    }
    if (jaAdicionado) return;

    const item = document.createElement('li');
    item.textContent = produtoNome;
    item.dataset.nome = produtoNome;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'botao-remover';
    botaoRemover.onclick = function () {
      lista.removeChild(item);
    };

    item.appendChild(botaoRemover);
    lista.appendChild(item);
  }

    function irParaProduto(event, url) {
    if (event.target.classList.contains('botao-adicionar')) return;
    window.location.href = url;
  }

      function selecionarProduto(elemento) {
      elemento.classList.toggle('selecionado');
    }

    function adicionarCarrinho(event, produtoNome) {
      event.stopPropagation(); 
      const lista = document.getElementById('carrinho-lista');

      const item = document.createElement('li');
      item.textContent = produtoNome;

      const botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'Remover';
      botaoRemover.className = 'botao-remover';
      botaoRemover.onclick = function () {
        lista.removeChild(item);
      };

      item.appendChild(botaoRemover);
      lista.appendChild(item);
    }