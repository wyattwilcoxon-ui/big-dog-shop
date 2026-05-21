import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedRoute from './components/ProtectedRoute';

import Layout from './components/layout/Layout';
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route - completely standalone, no auth wrapper */}
        <Route path="/join-the-pack" element={<JoinThePack />} />
        
        {/* All other routes - wrapped with AuthProvider */}
        <Route path="/*" element={
          <AuthProvider>
            <QueryClientProvider client={queryClientInstance}>
              <ProtectedRoutes />
              <Toaster />
            </QueryClientProvider>
          </AuthProvider>
        } />
      </Routes>
    </Router>
  )
}

const ProtectedRoutes = () => {
  const { isLoadingAuth, isLoadingPublicSettings } = useAuth();
  const showLoading = isLoadingPublicSettings || isLoadingAuth;

  return (
    <Routes>
      <Route element={<ProtectedRoute fallback={
        showLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-cream">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-fog border-t-primary rounded-full animate-spin"></div>
              <span className="font-brand text-pebble text-sm">Loading Big Dog Energy...</span>
            </div>
          </div>
        ) : null
      } />}>
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
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App