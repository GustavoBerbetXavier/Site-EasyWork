import { ArrowRight } from 'lucide-react';

import { config } from '../config';

export function FinalCta() {
  return (
    <section className="section" aria-labelledby="cta-titulo" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta">
          <span className="eyebrow">EasyWork</span>
          <h2 id="cta-titulo">Precisa de um serviço ou quer mais clientes?</h2>
          <p>O aplicativo já está no ar. Crie sua conta em poucos minutos, direto pelo navegador.</p>
          <div className="cta__buttons">
            <a className="btn btn--light" href={config.appClientUrl} target="_blank" rel="noopener">
              Encontrar profissionais <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--outline-light" href={config.appProfessionalUrl} target="_blank" rel="noopener">Sou profissional</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo.png" alt="EasyWork" width={170} height={78} />
            <p>Plataforma que conecta pessoas a profissionais e empresas prestadoras de serviços. Começando por {config.city}.</p>
          </div>
          <nav aria-label="Rodapé: site">
            <h3>Site</h3>
            <ul>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#profissionais">Para profissionais</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#empresas">Empresas</a></li>
              <li><a href="#duvidas">Dúvidas</a></li>
            </ul>
          </nav>
          <nav aria-label="Rodapé: aplicativo e contato">
            <h3>Aplicativo</h3>
            <ul>
              <li><a href={config.appUrl} target="_blank" rel="noopener">Acessar o app</a></li>
              <li><a href={config.appClientUrl} target="_blank" rel="noopener">Criar conta de cliente</a></li>
              <li><a href={config.appProfessionalUrl} target="_blank" rel="noopener">Criar perfil profissional</a></li>
              {config.whatsappUrl ? <li><a href={config.whatsappUrl} target="_blank" rel="noopener">WhatsApp</a></li> : null}
              {config.email ? <li><a href={`mailto:${config.email}`}>{config.email}</a></li> : null}
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {year} EasyWork. Todos os direitos reservados.</span>
          <span>Plataforma privada e independente.</span>
        </div>
      </div>
    </footer>
  );
}
