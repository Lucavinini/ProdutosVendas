import React from 'react';

export default function CardDoProduto({ produto, aoComprar }) {
  console.log('produto', produto)
  return (
    <div className="product-card">
      <img src={produto.img} alt={produto.nome} width="150" />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.valor.toFixed(2)}</p>
      <button onClick={() => aoComprar(produto)}>Comprar</button>
    </div>
  );
}
