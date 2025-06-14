import React, { useEffect, useState } from 'react';
import Parse from './parseConfig';
import CardDoProduto from './components/CardDoProduto';
import Card from './components/Card';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      console.log('fetch')
      const Product = Parse.Object.extend('Produtos'); // nome da classe no Back4App
      const query = new Parse.Query(Product);
      const results = await query.find();
      console.log('results', results)
      const products = results.map(p => ({
        id: p.id,
        nome: p.get('nome'),
        valor: p.get('valor'),
        img: p.get('img')
      }));
      setProducts(products);
    }
    fetchProducts();
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCartItems(prev => [...prev, produto]);
  };

  console.log('products', products);
  return (
    <div className="App">
      <h1>Loja de Produtos</h1>
      <div className="product-grid">
        {products.map(p => (
          <CardDoProduto key={p.id} produto={p} aoComprar={adicionarAoCarrinho} />
        ))}
      </div>
      
    </div>
  );
}

export default App;

/*
<Card itens={cartItems} />
*/