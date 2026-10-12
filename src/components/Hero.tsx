import { ArrowRight, Bell, Briefcase, Car, ChevronDown, Gem, House, Laptop, MapPin, MessageCircle, Search, ShieldCheck, Star, UserRound } from 'lucide-react';

import { config } from '../config';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Serviços perto de você</span>
          <h1 id="hero-titulo" className="hero__title">
            Encontre quem <span>resolve.</span>
          </h1>
          <p className="hero__lead">
            O EasyWork conecta quem precisa de um serviço a profissionais e empresas da sua cidade. Busque, compare
            perfis, converse pelo aplicativo e avalie quem atendeu você.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href={config.appClientUrl} target="_blank" rel="noopener">
              Encontrar profissionais <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#profissionais">Quero divulgar meus serviços</a>
          </div>
          <div className="hero__note">
            <span><ShieldCheck size={16} aria-hidden="true" /> Gratuito para quem contrata</span>
            <span><MapPin size={16} aria-hidden="true" /> Começando por {config.city}</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" aria-hidden="true" />
          <PhonePreview />
          <div className="float-card float-card--a" aria-hidden="true">
            <i style={{ background: 'var(--teal-light)', color: 'var(--teal)' }}><MessageCircle size={18} /></i>
            <div>Nova mensagem<small>Conversa direto pelo app</small></div>
          </div>
          <div className="float-card float-card--b" aria-hidden="true">
            <i style={{ background: 'var(--amber-light)', color: '#d97706' }}><Star size={18} /></i>
            <div>Avaliações<small>De quem já contratou</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Ilustração da tela inicial do aplicativo (mesmo layout e cores do app). */
function PhonePreview() {
  return (
    <div className="phone" role="img" aria-label="Tela inicial do aplicativo EasyWork, com busca, categorias e profissionais bem avaliados">
      <div className="phone__screen" aria-hidden="true">
        <div className="phone__top">
          <img src="/logo.png" alt="" />
          <span className="phone__bell"><Bell size={15} /></span>
        </div>
        <div>
          <div className="phone__loc">SUA LOCALIZAÇÃO</div>
          <div className="phone__city"><MapPin size={11} /> {config.city} <ChevronDown size={11} /></div>
        </div>
        <div className="phone__hero">
          <span className="phone__tag">SERVIÇOS PERTO DE VOCÊ</span>
          <strong>Encontre quem resolve.</strong>
          <small>PROFISSIONAIS LOCAIS, COM CONFIANÇA.</small>
        </div>
        <div className="phone__search"><Search size={14} /> O que você precisa?</div>
        <div className="phone__cats">
          <span className="phone__cat"><i style={{ background: 'var(--teal-light)', color: 'var(--teal)' }}><House size={14} /></i>Casa</span>
          <span className="phone__cat"><i style={{ background: 'var(--amber-light)', color: '#d97706' }}><Car size={14} /></i>Auto</span>
          <span className="phone__cat"><i style={{ background: '#f1f5f9', color: '#475569' }}><Gem size={14} /></i>Beleza</span>
          <span className="phone__cat"><i style={{ background: '#eff6ff', color: '#2563eb' }}><Laptop size={14} /></i>Tecnologia</span>
        </div>
        <div className="phone__card">
          <span className="phone__avatar"><UserRound size={22} /></span>
          <div>
            <strong>Seu perfil aqui</strong>
            <span>Especialidade · Bairro</span>
            <div className="phone__rating"><Star size={10} /> Avaliações de clientes</div>
            <span className="phone__pill">● Disponível para orçamento</span>
          </div>
        </div>
        <div className="phone__nav">
          <span className="on"><House size={15} />Início</span>
          <span><Briefcase size={15} />Serviços</span>
          <span><MessageCircle size={15} />Mensagens</span>
          <span><UserRound size={15} />Perfil</span>
        </div>
      </div>
    </div>
  );
}
