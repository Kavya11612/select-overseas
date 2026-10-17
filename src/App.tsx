import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import StudyAbroadPage from '@/pages/StudyAbroadPage';
import ContactPage from '@/pages/ContactPage';
import ServiceDetail from '@/components/ServiceDetail';
import BlogPage from '@/components/BlogPage';
import BlogPost from '@/components/BlogPost';
import PolicyPage from '@/pages/PolicyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="study-abroad" element={<StudyAbroadPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PolicyPage />} />
          <Route path="terms-conditions" element={<PolicyPage />} />
          <Route path="anti-fraud-policy" element={<PolicyPage />} />
          <Route path="refund-returns" element={<PolicyPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
