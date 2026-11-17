import React, { useEffect } from 'react';
import { useStore } from './context/StoreContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionsBar from './components/CollectionsBar';
import FeaturedShowcase from './components/FeaturedShowcase';
import ProductGrid from './components/ProductGrid';
import CustomHoodieSection from './components/CustomHoodieSection';
import HauteCraftsmanship from './components/HauteCraftsmanship';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import ProductModal from './components/ProductModal';
import AuthModal from './components/AuthModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import Toast from './components/Toast';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import AccountPage from './pages/AccountPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const {
    activePage,
    setActivePage,
    activeCategoryFilter,
    setActiveCategoryFilter
  } = useStore();

  const [sortBy, setSortBy] = React.useState('featured');

  // Scroll to top on page view switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-luxury-950 text-luxury-100 flex flex-col font-sans selection:bg-gold-400 selection:text-luxury-950 antialiased">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Homepage (Phase 2) */}
        {activePage === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <Hero
              onExploreClick={() => {
                const el = document.getElementById('home-collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onCustomClick={() => {
                const el = document.getElementById('custom-studio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Signature Curations Showcase */}
            <FeaturedShowcase />

            {/* Home Collections Section */}
            <section id="home-collection" className="py-16 border-b border-gold-400/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-6">
                  <span className="text-xs font-display font-bold tracking-widest text-gold-400 uppercase block mb-2">
                    THE ARCHIVAL WARDROBE
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
                    EXPLORE ALL <span className="text-gold-gradient">23 DESIGNS.</span>
                  </h2>
                </div>

                {/* Collections Bar with filter pills and sort */}
                <CollectionsBar
                  activeCategory={activeCategoryFilter}
                  onSelectCategory={(catId) => setActiveCategoryFilter(catId)}
                  sortBy={sortBy}
                  onSortChange={(val) => setSortBy(val)}
                  totalVisibleCount={23}
                />

                {/* Products Grid */}
                <ProductGrid
                  activeCategory={activeCategoryFilter}
                  sortBy={sortBy}
                />

                {/* View Full Catalog Button */}
                <div className="mt-12 text-center">
                  <button
                    onClick={() => {
                      setActivePage('catalog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-3.5 rounded-xl bg-luxury-900 border border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-luxury-950 font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-glow-gold hover:shadow-glow-gold-lg"
                  >
                    Open Advanced Product Catalog & Filter Workbench &rarr;
                  </button>
                </div>

              </div>
            </section>

            {/* Custom Hoodie Section */}
            <CustomHoodieSection />

            {/* Haute Craftsmanship 4 Pillars */}
            <HauteCraftsmanship />

            {/* Connoisseur Testimonials */}
            <Testimonials />
          </div>
        )}

        {/* Dedicated Product Catalog Page (Phase 3) */}
        {activePage === 'catalog' && (
          <div className="animate-fadeIn">
            <CatalogPage />
          </div>
        )}

        {/* Dedicated Product Details Page (Phase 3) */}
        {activePage === 'product-detail' && (
          <div className="animate-fadeIn">
            <ProductDetailPage />
          </div>
        )}

        {/* Dedicated Custom Hoodie Studio */}
        {activePage === 'custom' && (
          <div className="py-12 animate-fadeIn">
            <CustomHoodieSection />
          </div>
        )}

        {/* Dedicated Full Shopping Cart Page (Phase 4) */}
        {activePage === 'cart' && (
          <div className="animate-fadeIn">
            <CartPage />
          </div>
        )}

        {/* Dedicated Checkout Flow (Phase 4) */}
        {activePage === 'checkout' && (
          <div className="animate-fadeIn">
            <CheckoutPage />
          </div>
        )}

        {/* Dedicated Order Confirmation & Receipt (Phase 4) */}
        {activePage === 'order-confirmation' && (
          <div className="animate-fadeIn">
            <OrderConfirmationPage />
          </div>
        )}

        {/* Dedicated Order Tracking System (Phase 4) */}
        {activePage === 'tracking' && (
          <div className="animate-fadeIn">
            <OrderTrackingPage />
          </div>
        )}

        {/* Customer Account & Connoisseur Portal (Phase 5) */}
        {activePage === 'account' && (
          <div className="animate-fadeIn">
            <AccountPage />
          </div>
        )}

        {/* Brand Manifesto & About Us Page (Phase 5) */}
        {activePage === 'about' && (
          <div className="animate-fadeIn">
            <AboutUsPage />
          </div>
        )}

        {/* Concierge & Contact Us Page (Phase 5) */}
        {activePage === 'contact' && (
          <div className="animate-fadeIn">
            <ContactUsPage />
          </div>
        )}

        {/* Dedicated Atelier Admin Portal & Inventory (Phase 6) */}
        {activePage === 'admin' && (
          <div className="animate-fadeIn">
            <AdminPage />
          </div>
        )}
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge Button */}
      <WhatsAppFloatingButton />

      {/* Cart Slide-over Drawer */}
      <CartDrawer />

      {/* Wishlist Slide-over Drawer */}
      <WishlistDrawer />

      {/* Global Live Search Modal */}
      <SearchModal />

      {/* Product Quick View Modal */}
      <ProductModal />

      {/* Authentication Modal (Phase 5) */}
      <AuthModal />

      {/* Toast Notifications */}
      <Toast />
    </div>
  );
}
