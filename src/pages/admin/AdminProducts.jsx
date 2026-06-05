import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Package } from 'lucide-react';
import { getProducts } from '@/lib/shopify';
import { getProductCopy } from '@/lib/productCopy';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const getProductStatus = (handle) => {
    const copy = getProductCopy(handle);
    if (!copy) return { status: 'missing', label: 'Missing Copy', color: 'bg-red-100 text-red-700' };
    
    // Check if it's an alias (not in BASE_PRODUCT_COPY directly)
    const isAlias = !Object.keys({
      'bosie-bag': true,
      'clip-and-go': true,
      'bosie-bag-8pack': true,
      'starter-bundle': true,
      'tennis-balls': true,
    }).includes(handle);
    
    if (isAlias) {
      return { status: 'alias', label: 'Alias', color: 'bg-blue-100 text-blue-700' };
    }
    
    return { status: 'ok', label: 'Has Copy', color: 'bg-green-100 text-green-700' };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Package className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="font-brand text-lg text-midnight">Loading products...</p>
        </div>
      </div>
    );
  }

  const missingCount = products.filter(p => !getProductCopy(p.handle)).length;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-5xl text-midnight mb-2">Product Copy Manager</h1>
          <p className="font-body text-pebble">
            Track which Shopify products have matching copy in the system.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border-bold p-4">
            <p className="font-brand text-sm text-pebble mb-1">Total Products</p>
            <p className="font-display text-3xl text-midnight">{products.length}</p>
          </div>
          <div className="bg-green-50 rounded-xl border-2 border-green-200 p-4">
            <p className="font-brand text-sm text-green-700 mb-1">With Copy</p>
            <p className="font-display text-3xl text-green-800">{products.length - missingCount}</p>
          </div>
          {missingCount > 0 && (
            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-4">
              <p className="font-brand text-sm text-red-700 mb-1">Missing Copy</p>
              <p className="font-display text-3xl text-red-800">{missingCount}</p>
            </div>
          )}
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl border-bold shadow-cartoon-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-midnight text-white">
                <tr>
                  <th className="font-brand text-sm px-6 py-4 text-left">Product</th>
                  <th className="font-brand text-sm px-6 py-4 text-left">Handle</th>
                  <th className="font-brand text-sm px-6 py-4 text-left">Price</th>
                  <th className="font-brand text-sm px-6 py-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => {
                  const status = getProductStatus(product.handle);
                  return (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-t border-fog hover:bg-cream/50"
                    >
                      <td className="px-6 py-4">
                        <p className="font-brand text-midnight">{product.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <code className="font-mono text-xs text-pebble bg-fog px-2 py-1 rounded">
                          {product.handle}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-display text-primary text-lg">${product.price.toFixed(2)}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 font-brand text-xs px-3 py-1 rounded-full ${status.color}`}>
                          {status.status === 'ok' && <CheckCircle2 className="w-3.5 h-3.5" />}
                          {status.status === 'missing' && <AlertCircle className="w-3.5 h-3.5" />}
                          {status.status === 'alias' && <Package className="w-3.5 h-3.5" />}
                          {status.label}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Text */}
        {missingCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-xl p-6"
          >
            <h3 className="font-brand text-orange-800 text-sm mb-2">⚠️ Action Required</h3>
            <p className="font-body text-orange-700 text-sm">
              {missingCount} product{missingCount > 1 ? 's' : ''} missing copy. Add them to{' '}
              <code className="bg-orange-100 px-1.5 py-0.5 rounded">lib/productCopy.js</code> to enable 
              custom product descriptions on the detail pages.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}