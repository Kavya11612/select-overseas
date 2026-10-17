import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';

/** Top bar + navbar stuck to top; page content scrolls underneath */
export default function SiteHeader() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 w-full">
        <TopBar />
        <Navbar />
      </div>
      {/* Spacer = topbar (sm) + nav height so first paint isn't covered */}
      <div className="h-16 shrink-0 sm:h-[7.5rem] md:h-[8.5rem]" aria-hidden />
    </>
  );
}
