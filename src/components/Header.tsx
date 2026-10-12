import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { config } from '../config';

const LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#profissionais', label: 'Para profissionais' },
  { href: '#planos', label: 'Planos' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu com a tecla Esc.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="header__logo" href="#inicio" aria-label="EasyWork, voltar ao início">
          <img src="/logo.png" alt="EasyWork" width={150} height={68} />
        </a>
        <nav className="nav" aria-label="Principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header__actions">
          <a className="btn btn--ghost" href={config.appProfessionalUrl} target="_blank" rel="noopener">Sou profissional</a>
          <a className="btn btn--primary" href={config.appUrl} target="_blank" rel="noopener">Acessar o app</a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-celular"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div id="menu-celular" className="mobile-menu" hidden={!open}>
        <nav aria-label="Menu do celular">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="btn btn--primary btn--block" href={config.appUrl} target="_blank" rel="noopener">Acessar o app</a>
          <a className="btn btn--ghost btn--block" href={config.appProfessionalUrl} target="_blank" rel="noopener">Sou profissional</a>
        </nav>
      </div>
    </header>
  );
}
