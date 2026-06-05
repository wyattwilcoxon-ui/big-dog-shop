import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';


import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';

import Pack from './pages/Pack';
import FAQ from './pages/FAQ';
import ShopifyTest from './pages/ShopifyTest';
import About from './pages/About';
import Contact from './pages/Contact';
import WhyBigDogs from './pages/WhyBigDogs';
import ProductDetail from './pages/ProductDetail';
import JoinThePack from './pages/JoinThePack';
import AdminProducts from './pages/admin/AdminProducts';

function App() {
  return (
    <Router>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <ScrollToTop />
          <Routes>
            {/* Standalone email signup landing page */}
            <Route path="/join" element={<JoinThePack />} />
            
            {/* All other routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/pack" element={<Pack />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shopify-test" element={<ShopifyTest />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/why-big-dogs-need-bigger-poop-bags" element={<WhyBigDogs />} />
              <Route path="/product/:handle" element={<ProductDetail />} />
              <Route path="/admin/products" element={<AdminProducts />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </Router>
  )
}

export default App