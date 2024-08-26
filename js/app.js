let valorTotal;
limpar();

function adicionar() {
   //recuperar valores do nome do produto, quantidade e valor 
   let quantidade = document.querySelector('input').value;
   let produto = document.querySelector('select').value;
   let nomeProduto = produto.split('-')[0];
   let valorUnitarioProduto = produto.split('R$')[1];
   
   //calcular o preço, o subtotal
   let subTotal = (quantidade * valorUnitarioProduto);
   
   //adicionar ao carrinho
   let carrinhoCompra = document.getElementById('lista-produtos');
   carrinhoCompra.innerHTML = carrinhoCompra.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

   //atualizar o valor total da compra  
   valorTotal = valorTotal + subTotal;
   let campoTotal = document.getElementById('valor-total');
   campoTotal.textContent = `R$ ${valorTotal}`;
   document.querySelector('input').value = '';
}

function limpar() {
   valorTotal = 0;
   document.getElementById('lista-produtos').innerHTML = '';
   document.getElementById('valor-total').textContent = 'R$ 0';
}