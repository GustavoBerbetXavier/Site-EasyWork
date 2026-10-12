import {
  BadgeCheck,
  Bell,
  ChartColumn,
  Check,
  Images,
  ListChecks,
  Lock,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  UserRound,
  Users,
  Wrench,
} from 'lucide-react';

import { businessContact, config } from '../config';
import { CATEGORIES } from '../data/content';

export function Problem() {
  return (
    <section className="section section--white" aria-labelledby="problema-titulo">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">O problema</span>
          <h2 id="problema-titulo" className="section-title">Achar um bom profissional ainda dá trabalho.</h2>
          <p className="section-lead">
            Quando o chuveiro queima ou o carro faz um barulho estranho, a busca costuma começar do zero: pedir
            indicação, procurar em grupos e torcer para alguém responder.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem">
            <span className="icon-box icon-box--amber"><Users size={24} aria-hidden="true" /></span>
            <h3>Depender só de indicação</h3>
            <p>Nem sempre há alguém para indicar, e a indicação raramente mostra preço, serviços ou disponibilidade.</p>
          </article>
          <article className="problem">
            <span className="icon-box icon-box--slate"><MapPin size={24} aria-hidden="true" /></span>
            <h3>Não saber quem atende a região</h3>
            <p>Muitos profissionais da cidade têm pouca visibilidade fora do próprio círculo de clientes.</p>
          </article>
          <article className="problem">
            <span className="icon-box"><MessageCircle size={24} aria-hidden="true" /></span>
            <h3>Contato espalhado</h3>
            <p>Telefones anotados, mensagens em vários lugares e nenhuma forma clara de saber quem foi bem avaliado.</p>
          </article>
        </div>
        <div className="solution">
          <span className="icon-box" style={{ background: 'var(--teal-deep)', color: '#5eead4' }}><Check size={24} aria-hidden="true" /></span>
          <p>
            <strong>O EasyWork reúne tudo em um lugar:</strong> profissionais por categoria e cidade, perfis com serviços e
            avaliações, e conversa direta pelo aplicativo.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: Search, title: 'Busque', text: 'Procure pelo serviço que precisa, por categoria ou pela sua cidade.' },
    { icon: UserRound, title: 'Compare perfis', text: 'Veja especialidade, região atendida, serviços, fotos de trabalhos e avaliações.' },
    { icon: MessageCircle, title: 'Converse', text: 'Peça um orçamento e combine os detalhes pelo chat do aplicativo, com envio de fotos.' },
    { icon: Star, title: 'Avalie', text: 'Depois do serviço, deixe sua nota e ajude outras pessoas a escolher melhor.' },
  ];
  return (
    <section id="como-funciona" className="section" aria-labelledby="como-titulo">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Para quem precisa de um serviço</span>
          <h2 id="como-titulo" className="section-title">Como funciona</h2>
          <p className="section-lead">Em poucos passos você encontra quem resolve, sem sair do aplicativo.</p>
        </div>
        <ol className="steps" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="icon-box"><step.icon size={24} aria-hidden="true" /></span>
              <span className="step__num">PASSO {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="free-banner">
          <p><strong>Para quem contrata, o EasyWork é gratuito.</strong> Basta criar sua conta.</p>
          <a className="btn btn--primary" href={config.appClientUrl} target="_blank" rel="noopener">Criar conta grátis</a>
        </div>
      </div>
    </section>
  );
}

export function Professionals() {
  const features = [
    { icon: UserRound, title: 'Perfil profissional completo', text: 'Foto, capa, apresentação, especialidade, região atendida, experiência e formação.' },
    { icon: ListChecks, title: 'Seus serviços organizados', text: 'Cadastre os serviços que você oferece, com descrição e valor, e pause quando quiser.' },
    { icon: Images, title: 'Fotos de trabalhos', text: 'Mostre projetos já realizados nos planos Plus+ e Premium.' },
    { icon: Bell, title: 'Aviso de mensagem nova', text: 'Receba notificações no celular ou no computador quando um cliente entrar em contato.' },
    { icon: ChartColumn, title: 'Painel de resultados', text: 'Acompanhe suas avaliações; no Premium, também visualizações e contatos.' },
  ];
  return (
    <section id="profissionais" className="section section--navy" aria-labelledby="pro-titulo">
      <div className="container pro-grid">
        <div>
          <span className="eyebrow">Para profissionais e empresas</span>
          <h2 id="pro-titulo" className="section-title" style={{ marginTop: 16 }}>Seu trabalho visto por quem procura.</h2>
          <p className="section-lead" style={{ marginTop: 16 }}>
            Crie sua conta, siga o passo a passo de configuração e apareça para clientes da sua região. Criar o perfil é
            gratuito; os planos ampliam a sua divulgação.
          </p>
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature.title}>
                <span className="icon-box" style={{ background: 'var(--teal-deep)', color: '#5eead4' }}><feature.icon size={20} aria-hidden="true" /></span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="hero__ctas">
            <a className="btn btn--light" href={config.appProfessionalUrl} target="_blank" rel="noopener">Criar meu perfil</a>
            <a className="btn btn--outline-light" href="#planos">Ver planos</a>
          </div>
        </div>
        <div className="dashboard" role="img" aria-label="Painel do profissional no aplicativo, com status do perfil, desempenho e plano">
          <div aria-hidden="true" style={{ display: 'grid', gap: 14 }}>
            <span className="eyebrow" style={{ justifySelf: 'start' }}>Área do prestador</span>
            <div className="dashboard__hello">Olá, profissional!</div>
            <div className="dashboard__sub">Acompanhe seu perfil e seus resultados.</div>
            <div className="dashboard__status">
              <span className="icon-box" style={{ width: 40, height: 40 }}><ShieldCheck size={20} /></span>
              <div><strong>Seu perfil está ativo</strong><small>Visível para clientes da sua região</small></div>
            </div>
            <div className="dashboard__stats">
              <div className="stat"><i style={{ background: 'var(--teal-light)', color: 'var(--teal)' }}><ChartColumn size={17} /></i><div><strong>Visualizações</strong><small>Premium</small></div></div>
              <div className="stat"><i style={{ background: 'var(--amber-light)', color: '#d97706' }}><MessageCircle size={17} /></i><div><strong>Contatos</strong><small>Premium</small></div></div>
              <div className="stat"><i style={{ background: 'var(--amber-light)', color: 'var(--amber)' }}><Star size={17} /></i><div><strong>Nota média</strong><small>Todos os planos</small></div></div>
              <div className="stat"><i style={{ background: '#eef2ff', color: '#4f46e5' }}><ListChecks size={17} /></i><div><strong>Avaliações</strong><small>Todos os planos</small></div></div>
            </div>
            <div className="dashboard__plan">
              <Star size={18} color="#f59e0b" fill="#f59e0b" />
              <div><small>SEU PLANO</small>Escolha o seu</div>
              <em>Conhecer planos ›</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="section section--white" aria-labelledby="categorias-titulo">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Categorias</span>
          <h2 id="categorias-titulo" className="section-title">{CATEGORIES.length} categorias de serviço</h2>
          <p className="section-lead">Do conserto em casa às aulas particulares: encontre ou divulgue serviços em diversas áreas.</p>
        </div>
        <ul className="chips" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {CATEGORIES.map((category) => (
            <li key={category} className="chip">{category}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Business() {
  const contact = businessContact();
  const items = [
    'Perfil institucional',
    'Cadastro de vários profissionais',
    'Combinação de perfis Plus+ e Premium',
    'Galeria de projetos da empresa',
    'Gestão centralizada dos perfis',
    'Pacotes para equipes maiores',
  ];
  return (
    <section id="empresas" className="section" aria-labelledby="empresas-titulo">
      <div className="container">
        <div className="business">
          <div>
            <span className="eyebrow">Plano Empresarial</span>
            <h2 id="empresas-titulo" className="section-title" style={{ marginTop: 16 }}>Divulgue sua equipe inteira.</h2>
            <p className="section-lead" style={{ marginTop: 16 }}>
              Para empresas que trabalham com vários profissionais e querem apresentar a equipe e os projetos em um só lugar.
              A partir de R$ 85,00 por mês, com pacotes personalizados.
            </p>
            <ul className="business__list">
              {items.map((item) => (
                <li key={item}><Check size={18} aria-hidden="true" />{item}</li>
              ))}
            </ul>
            <a className="btn btn--primary" href={contact.href} target={contact.external ? '_blank' : undefined} rel={contact.external ? 'noopener' : undefined}>
              {contact.label}
            </a>
            <p className="business__note">O plano Empresarial é montado sob consulta, de acordo com o tamanho da equipe.</p>
          </div>
          <div className="team" role="img" aria-label="Exemplo de equipe de uma empresa com perfis Plus+ e Premium">
            <div aria-hidden="true" style={{ display: 'grid', gap: 12 }}>
              <div className="team__row" style={{ background: 'var(--navy)', color: 'var(--white)', borderColor: 'var(--navy)' }}>
                <span className="team__avatar" style={{ background: 'var(--teal-deep)', color: '#5eead4' }}><Wrench size={18} /></span>
                <div><strong>Sua empresa</strong><small style={{ color: '#cbd5e1' }}>Perfil institucional</small></div>
                <span className="team__badge" style={{ background: 'var(--teal)', color: 'var(--white)' }}>EMPRESA</span>
              </div>
              <div className="team__row">
                <span className="team__avatar" style={{ background: 'var(--teal-light)', color: 'var(--teal-dark)' }}>P1</span>
                <div><strong>Profissional da equipe</strong><small>Especialidade</small></div>
                <span className="team__badge" style={{ background: 'var(--teal-light)', color: 'var(--teal-dark)' }}>PLUS+</span>
              </div>
              <div className="team__row">
                <span className="team__avatar" style={{ background: 'var(--amber-light)', color: 'var(--amber-dark)' }}>P2</span>
                <div><strong>Profissional da equipe</strong><small>Especialidade</small></div>
                <span className="team__badge" style={{ background: 'var(--amber-light)', color: 'var(--amber-dark)' }}>PREMIUM</span>
              </div>
              <div className="team__row">
                <span className="team__avatar" style={{ background: '#f1f5f9', color: '#475569' }}>P3</span>
                <div><strong>Profissional da equipe</strong><small>Especialidade</small></div>
                <span className="team__badge" style={{ background: 'var(--teal-light)', color: 'var(--teal-dark)' }}>PLUS+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const items = [
    { icon: BadgeCheck, title: 'Plataforma independente', text: 'O EasyWork é privado e independente, sem vínculo com órgãos públicos.' },
    { icon: Star, title: 'Avaliações de clientes', text: 'Somente quem conversou com o profissional pelo app pode avaliá-lo.' },
    { icon: Lock, title: 'Seus dados protegidos', text: 'Telefone, e-mail e data de nascimento do cadastro ficam visíveis só para você.' },
    { icon: Smartphone, title: 'Funciona no navegador', text: 'Use no celular ou no computador, sem instalar nada. No celular, adicione à tela inicial.' },
  ];
  return (
    <section className="section section--white" aria-labelledby="confianca-titulo">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Confiança</span>
          <h2 id="confianca-titulo" className="section-title">Feito para você usar com tranquilidade.</h2>
        </div>
        <div className="trust">
          {items.map((item) => (
            <div key={item.title} className="trust__item">
              <span className="icon-box"><item.icon size={24} aria-hidden="true" /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
