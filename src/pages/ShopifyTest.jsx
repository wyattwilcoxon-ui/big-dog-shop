import React, { useEffect, useState } from 'react';
import { getProducts, createCart, addToCart, parseCartLines } from '@/lib/shopify';

export default function ShopifyTest() {
  const [log, setLog] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addLog = (msg, data) => {
    const entry = { time: new Date().toISOString(), msg, data };
    console.log('[ShopifyTest]', msg, data);
    setLog(prev => [entry, ...prev]);
  };

  useEffect(() => {
    const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
    const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
    addLog('ENV CHECK', { domain: domain || '⚠️ MISSING', token: token ? '✅ SET' : '⚠️ MISSING' });

    getProducts()
      .then(prods => {
        addLog(`✅ Products loaded (${prods.length})`, prods.map(p => ({ name: p.name, available: p.available, variantId: p.variantId })));
        setProducts(prods);
      })
      .catch(err => addLog('❌ getProducts FAILED', err.message));
  }, []);

  const handleTestAddToCart = async (product) => {
    addLog('🛒 Testing addToCart...', { name: product.name, variantId: product.variantId });
    try {
      let activeCart = cart;
      if (!activeCart) {
        addLog('Creating new cart...');
        activeCart = await createCart();
        addLog('✅ Cart created', activeCart);
        setCart(activeCart);
      }
      const updatedCart = await addToCart(activeCart.id, product.variantId);
      addLog('✅ cartLinesAdd success', updatedCart);
      const lines = parseCartLines(updatedCart);
      addLog('✅ Cart lines parsed', lines);
      setCartItems(lines);
      setCart(updatedCart);
    } catch (err) {
      addLog('❌ addToCart FAILED', err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-mono text-sm">
      <h1 className="text-2xl font-bold mb-6">🔧 Shopify Integration Test</h1>

      {/* Products */}
      <div className="mb-6">
        <h2 className="font-bold text-lg mb-2">Products from Shopify ({products.length})</h2>
        {products.length === 0 && <p className="text-gray-500">Loading or no products found...</p>}
        {products.map((p, i) => (
          <div key={i} className="border rounded p-3 mb-2 flex items-center justify-between bg-white">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-xs text-gray-500">variantId: {p.variantId || '⚠️ NONE'}</div>
              <div className="text-xs">available: <span className={p.available ? 'text-green-600' : 'text-red-500'}>{String(p.available)}</span></div>
              <div className="text-xs">price: ${p.price}</div>
            </div>
            <button
              onClick={() => handleTestAddToCart(p)}
              disabled={!p.variantId}
              className="bg-orange-500 text-white px-4 py-2 rounded disabled:opacity-40"
            >
              Test Add
            </button>
          </div>
        ))}
      </div>

      {/* Cart state */}
      {cartItems.length > 0 && (
        <div className="mb-6 bg-green-50 border border-green-300 rounded p-3">
          <h2 className="font-bold text-green-700 mb-1">✅ Cart Items ({cartItems.length})</h2>
          {cartItems.map((item, i) => (
            <div key={i} className="text-xs">{item.name} × {item.quantity} = ${item.price}</div>
          ))}
          {cart?.checkoutUrl && (
            <a href={cart.checkoutUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline text-xs block mt-2">
              Open Checkout URL ↗
            </a>
          )}
        </div>
      )}

      {/* Log */}
      <div>
        <h2 className="font-bold text-lg mb-2">Event Log</h2>
        <div className="space-y-1 max-h-96 overflow-y-auto">
          {log.map((entry, i) => (
            <div key={i} className="bg-gray-100 rounded p-2 text-xs">
              <span className="text-gray-400 mr-2">{entry.time.split('T')[1].split('.')[0]}</span>
              <span className="font-semibold">{entry.msg}</span>
              {entry.data !== undefined && (
                <pre className="mt-1 text-gray-600 whitespace-pre-wrap break-all">{JSON.stringify(entry.data, null, 2)}</pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}