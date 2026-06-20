import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ArrowLeft, ShieldCheck, Truck, Leaf, Share2, Check, X, ZoomIn } from 'lucide-react';
import { getProductByHandle } from '@/lib/shopify';
import { useShopifyCart } from '@/lib/ShopifyCartContext';
import VariantSelector from '@/components/shop/VariantSelector';
import { getSeoTitle, getMetaDescription, getProductCopy } from '@/lib/productCopy.js';

const BADGES = [
  { icon: ShieldCheck, label: 'Leak-Proof*' },
  { icon: Truck, label: 'Free Shipping $25+' },
  { icon: Leaf, label: 'USDA Certified Biobased' },
];

export default function ProductDetail() {
  const { handle } = useParams();
  const { addItem } = useShopifyCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightbox, setLightbox] = useState(null); // null or image URL

  useEffect(() => {
    // Update SEO meta tags
    const seoTitle = getSeoTitle(handle);
    const metaDesc = getMetaDescription(handle);
    document.title = seoTitle;
    
    // Update/set meta description
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'description';
      document.head.appendChild(metaTag);
    }
    metaTag.content = metaDesc;

    console.log('🔍 URL handle:', handle);
    const testCopy = getProductCopy(handle);
    console.log('📋 Copy lookup result:', testCopy ? '✅ FOUND' : '❌ NOT FOUND', testCopy ? 'longDescription length:' + testCopy.longDescription?.length : '');

    getProductByHandle(handle)
      .then(p => {
        console.log('📦 Shopify:', { handle: p?.handle, title: p?.title });
        setProduct(p);
        if (p) setSelectedVariantId(p.variants[0]?.id || null);

        // Update Open Graph / Twitter meta tags with product image
        if (p?.images?.[0]) {
          const setMeta = (property, content, isName = false) => {
            const attr = isName ? `name="${property}"` : `property="${property}"`;
            let tag = document.querySelector(`meta[${attr}]`);
            if (!tag) {
              tag = document.createElement('meta');
              tag.setAttribute(isName ? 'name' : 'property', property);
              document.head.appendChild(tag);
            }
            tag.content = content;
          };
          const productUrl = `https://www.thebigdoglife.com/product/${handle}`;
          setMeta('og:image', p.images[0]);
          setMeta('og:image:width', '1200');
          setMeta('og:image:height', '1200');
          setMeta('og:url', productUrl);
          setMeta('og:title', seoTitle);
          setMeta('og:description', metaDesc);
          setMeta('twitter:image', p.images[0], true);
          setMeta('twitter:title', seoTitle, true);
          setMeta('twitter:description', metaDesc, true);
        }
      })
      .finally(() => setLoading(false));
  }, [handle]);

  const selectedVariant = product?.variants.find(v => v.id === selectedVariantId);

  const handleShare = async () => {
    // The proxy URL gives crawlers (iMessage, FB, Twitter) proper OG tags with product image/title
    const appId = window.location.hostname.split('.')[0];
    const proxyUrl = `https://${window.location.hostname}/functions/productOgProxy?handle=${handle}`;
    const shareUrl = `https://www.thebigdoglife.com/product/${handle}`;
    const shareData = {
      title: product.name,
      text: `Check out ${product.name} on Big Dog Life™`,
      url: proxyUrl,
    };
    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      await navigator.clipboard.writeText(proxyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddToCart = async () => {
    if (!selectedVariant?.available || adding) return;
    setAdding(true);
    await addItem(selectedVariantId, {
      name: product.name,
      price: selectedVariant.price,
      image: product.images[0],
    });
    setAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background pt-20">
        <p className="font-display text-4xl text-midnight">Product not found.</p>
        <Link to="/shop" className="font-brand text-primary hover:underline">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 font-brand text-sm text-pebble hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Images */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border-bold shadow-cartoon overflow-hidden aspect-square max-w-md mx-auto cursor-zoom-in relative group"
            onClick={() => product.images[activeImage] && setLightbox(product.images[activeImage])}
            >
              {product.images[activeImage] ? (
                <>
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                  </div>
                </>
              
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">🧻</div>
              )}
            </motion.div>

            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all ${
                      i === activeImage ? 'border-primary' : 'border-fog hover:border-stone'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-center" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h1 className="font-display text-5xl sm:text-6xl text-midnight leading-none">{product.name?.replace(/[®©]/g, '™')}</h1>

            {/* Price */}
            {selectedVariant && (
              <div className="flex items-baseline gap-3 mt-4">
                <span className="font-display text-5xl text-primary">${selectedVariant.price.toFixed(2)}</span>
                {selectedVariant.compareAtPrice && selectedVariant.compareAtPrice > selectedVariant.price && (
                  <span className="font-body text-stone line-through text-lg">${selectedVariant.compareAtPrice.toFixed(2)}</span>
                )}
              </div>
            )}

            {/* Use enhanced product copy from master copy document */}
            {(() => {
              const copy = getProductCopy(handle);
              if (copy?.longDescription) {
                const sections = copy.longDescription.split('\n\n');
                return (
                  <div className="font-body text-pebble mt-4 leading-relaxed text-base space-y-4">
                    {sections.map((section, i) => {
                      const trimmed = section.trim();
                      if (!trimmed) return null;
                      
                      // Section headers (all caps, short)
                      if (trimmed === trimmed.toUpperCase() && trimmed.length > 3 && trimmed.length < 60) {
                        return <p key={i} className="font-brand text-midnight text-sm uppercase tracking-wider mt-6 mb-2">{trimmed}</p>;
                      }
                      
                      // Bullet points with ▸
                      if (trimmed.startsWith('▸')) {
                        const lines = trimmed.split('\n').filter(l => l.trim());
                        return (
                          <div key={i} className="space-y-2 ml-2">
                            {lines.map((line, j) => {
                              const lineTrimmed = line.trim();
                              if (lineTrimmed.startsWith('▸')) {
                                return (
                                  <div key={j} className="flex items-start gap-2">
                                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                                    <span>{lineTrimmed.substring(1).trim()}</span>
                                  </div>
                                );
                              }
                              return <p key={j}>{lineTrimmed}</p>;
                            })}
                          </div>
                        );
                      }
                      
                      // Regular paragraph
                      return <p key={i}>{trimmed}</p>;
                    })}
                  </div>
                );
              }
              
              // Fallback to Shopify description
              return (
                <div className="font-body text-pebble mt-4 leading-relaxed text-base space-y-3">
                  {product.description?.split('\n').filter(line => line.trim()).map((line, i) => {
                    const trimmed = line.trim();
                    if (trimmed.startsWith('-') || trimmed.startsWith('•') || trimmed.startsWith('▸')) {
                      return (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          <span>{trimmed.replace(/^[-•▸]\s*/, '')}</span>
                        </div>
                      );
                    }
                    if (trimmed === trimmed.toUpperCase() && trimmed.length > 3 && trimmed.length < 60) {
                      return <p key={i} className="font-brand text-midnight text-sm uppercase tracking-wider mt-4 mb-1">{trimmed}</p>;
                    }
                    return <p key={i}>{trimmed}</p>;
                  })}
                </div>
              );
            })()}

            {/* Variant picker */}
            <div className="mt-6">
              <VariantSelector
                variants={product.variants}
                selectedId={selectedVariantId}
                onChange={setSelectedVariantId}
              />
            </div>

            {/* Availability */}
            {selectedVariant && !selectedVariant.available && (
              <p className="mt-4 font-brand text-sm text-destructive">⚠️ This variant is currently sold out.</p>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant?.available || adding}
              className={`mt-8 w-full h-16 rounded-xl font-brand text-lg border-bold flex items-center justify-center gap-3 transition-all ${
                selectedVariant?.available
                  ? added
                    ? 'bg-secondary text-white shadow-cartoon-sm'
                    : 'bg-primary text-white shadow-cartoon hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none'
                  : 'bg-fog text-pebble cursor-not-allowed'
              }`}
            >
              {adding ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Adding...</>
              ) : added ? (
                '✅ Added to Cart!'
              ) : selectedVariant?.available ? (
                '🛒 Add to Cart'
              ) : (
                'Sold Out'
              )}
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="mt-3 w-full h-12 rounded-xl font-brand text-sm border-2 border-midnight text-midnight flex items-center justify-center gap-2 hover:bg-fog transition-colors"
            >
              {copied ? <><Check className="w-4 h-4 text-secondary" /> Link Copied!</> : <><Share2 className="w-4 h-4" /> Share This Product</>}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-8 border-t-2 border-fog">
              {BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 text-center">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-brand text-xs text-pebble">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={lightbox}
              alt="Product"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}