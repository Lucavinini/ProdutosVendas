import React from 'react';

export default function Card({ itens }) {
  const total = itens.reduce((soma, item) => soma + item.valor, 0);
  console.log('itens', itens);

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      {itens.length === 0
        ? <p>Vazio</p>
        : (
          <ul>
            {itens.map((item, idx) => (
              <li key={idx}>
                {item.nome} - R$ {item.valor.toFixed(2)}
              </li>
            ))}
          </ul>
        )
      }
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
