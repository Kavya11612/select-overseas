import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useReveal } from '@/hooks/useReveal';

export default function Layout() {
  const { pathname } = useLocation();
  const ref = useReveal<HTMLDivElement>([pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div ref={ref} className="min-h-screen bg-white">
      <SiteHeader />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
