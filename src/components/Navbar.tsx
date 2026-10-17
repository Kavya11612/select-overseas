import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { navLinks, type NavItem } from '@/data';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [pathname]);

  const closeAll = () => {
    setOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
  };

  const linkTone = (isActive: boolean) =>
    isActive ? 'text-primary-700' : 'text-neutral-700 hover:text-primary-700';

  return (
    <>
      <div className="w-full border-b border-neutral-100 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
        <nav className="container flex h-16 items-center justify-between md:h-20">
          <BrandLogo className="rounded-xl bg-white px-2 py-1 ring-1 ring-neutral-200/80" />

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <DesktopItem
                key={link.label}
                link={link}
                pathname={pathname}
                scrolled
                open={openDesktop === link.label}
                onOpen={() => setOpenDesktop(link.label)}
                onClose={() => setOpenDesktop(null)}
                linkTone={linkTone}
              />
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+917893537375"
              className="flex items-center gap-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-primary-600"
            >
              <Phone className="h-4 w-4" />
              +91 78935 37375
            </a>
            <Link to="/contact" className="btn-accent !py-2.5">
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-900 xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-[60] xl:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeAll}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mt-12 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-1 pb-6">
              {navLinks.map((link) => {
                const hasChildren = Boolean(link.children?.length);
                const expanded = openMobile === link.label;

                if (!hasChildren) {
                  return (
                    <NavLink
                      key={link.label}
                      to={link.href}
                      onClick={closeAll}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-700'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  );
                }

                return (
                  <div key={link.label} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() => setOpenMobile(expanded ? null : link.label)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expanded && (
                      <div className="mb-2 ml-2 space-y-0.5 border-l-2 border-primary-100 pl-3">
                        <Link
                          to={link.href}
                          onClick={closeAll}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
                        >
                          View all {link.label}
                        </Link>
                        {link.children!.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={closeAll}
                            className="block rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-3 border-t border-neutral-100 pt-4">
            <a
              href="tel:+917893537375"
              className="flex items-center justify-center gap-2 rounded-full bg-neutral-100 px-5 py-3 text-sm font-semibold text-neutral-800"
            >
              <Phone className="h-4 w-4" /> +91 78935 37375
            </a>
            <Link to="/contact" onClick={closeAll} className="btn-accent w-full">
              Free Consultation
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

function DesktopItem({
  link,
  pathname,
  scrolled,
  open,
  onOpen,
  onClose,
  linkTone,
}: {
  link: NavItem;
  pathname: string;
  scrolled: boolean;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkTone: (isActive: boolean) => string;
}) {
  const hasChildren = Boolean(link.children?.length);
  const isActive =
    link.href === '/'
      ? pathname === '/'
      : pathname === link.href || pathname.startsWith(`${link.href}/`) ||
        (link.children?.some((c) => pathname === c.href) ?? false);

  if (!hasChildren) {
    return (
      <li>
        <NavLink
          to={link.href}
          className={({ isActive: active }) =>
            `relative block rounded-full px-3 py-2 text-sm font-semibold transition-colors ${linkTone(active)}`
          }
        >
          {({ isActive: active }) => (
            <>
              {link.label}
              {active && (
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                    scrolled ? 'bg-primary-600' : 'bg-accent-400'
                  }`}
                />
              )}
            </>
          )}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        to={link.href}
        className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${linkTone(isActive || open)}`}
      >
        {link.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        {(isActive || open) && (
          <span
            className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
              scrolled ? 'bg-primary-600' : 'bg-accent-400'
            }`}
          />
        )}
      </Link>

      <div
        className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition-all duration-200 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-2xl bg-white py-2 shadow-2xl ring-1 ring-neutral-100">
          {link.children!.map((child) => (
            <Link
              key={child.label}
              to={child.href}
              onClick={onClose}
              className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-700 ${
                pathname === child.href ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
