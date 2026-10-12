import { Check, Minus } from 'lucide-react';

import { businessContact, config } from '../config';
import { COMPARISON, PLANS } from '../data/content';

export function Plans() {
  const contact = businessContact();
  return (
    <section id="planos" className="section section--white" aria-labelledby="planos-titulo">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Planos para profissionais</span>
          <h2 id="planos-titulo" className="section-title">Escolha como divulgar seu trabalho</h2>
          <p className="section-lead">
            Assinatura mensal, feita dentro do aplicativo. Mais divulgação não muda a sua avaliação: destaques são identificados.
          </p>
        </div>

        <div className="plans">
          {PLANS.map((plan) => {
            const isBusiness = plan.id === 'empresarial';
            const cta = isBusiness
              ? { href: contact.href, label: contact.label === 'Criar perfil da empresa' ? 'Começar pelo app' : contact.label, external: contact.external }
              : { href: config.appProfessionalUrl, label: `Assinar o ${plan.name}`, external: true };
            return (
              <article
                key={plan.id}
                className={`plan${plan.highlighted ? ' plan--highlight' : ''}${plan.dark ? ' plan--dark' : ''}`}
                aria-labelledby={`plano-${plan.id}`}
              >
                {plan.highlighted ? <span className="plan__badge">Recomendado</span> : null}
                <div>
                  <div className="plan__label">{plan.label}</div>
                  <h3 id={`plano-${plan.id}`} className="plan__name">{plan.name}</h3>
                </div>
                <div className="plan__price" aria-label={`${plan.pricePrefix ? `${plan.pricePrefix} ` : ''}R$ ${plan.price} por mês`}>
                  {plan.pricePrefix ? <span className="plan__prefix" aria-hidden="true">{plan.pricePrefix}</span> : null}
                  <span className="plan__currency" aria-hidden="true">R$</span>
                  <span className="plan__value" aria-hidden="true">{plan.price}</span>
                  <span className="plan__period" aria-hidden="true">/mês</span>
                </div>
                <p className="plan__desc">{plan.description}</p>
                <ul className="plan__features">
                  {plan.features.map((feature) => {
                    const off = feature.startsWith('Sem ');
                    return (
                      <li key={feature} className={off ? 'is-off' : undefined}>
                        {off ? <Minus size={16} aria-hidden="true" /> : <Check size={16} aria-hidden="true" />}
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <a
                  className={`btn btn--block ${plan.dark ? 'btn--light' : plan.highlighted ? 'btn--teal' : 'btn--ghost'}`}
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  rel={cta.external ? 'noopener' : undefined}
                >
                  {cta.label}
                </a>
              </article>
            );
          })}
        </div>
        <p className="plans-note">Criar o perfil de profissional é gratuito. Valores mensais, cobrados pelo Mercado Pago; cancele pelo aplicativo quando quiser.</p>

        <div className="compare">
          <h3 id="comparativo-titulo">Compare os planos</h3>
          <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="comparativo-titulo">
            <table>
              <caption className="sr-only">Comparação dos recursos dos planos Básico, Plus+, Premium e Empresarial</caption>
              <thead>
                <tr>
                  <th scope="col">Recurso</th>
                  {PLANS.map((plan) => (
                    <th key={plan.id} scope="col" className={plan.highlighted ? 'is-highlight' : undefined}>{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((value, index) => (
                      <td key={PLANS[index].id}>
                        {value === true ? (
                          <><Check size={18} className="yes" aria-hidden="true" /><span className="sr-only">Incluso</span></>
                        ) : value === null || value === false ? (
                          <><Minus size={18} className="no" aria-hidden="true" /><span className="sr-only">Não incluso</span></>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row">Valor mensal</th>
                  {PLANS.map((plan) => (
                    <td key={plan.id}><strong>{plan.pricePrefix ? 'A partir de ' : ''}R$ {plan.price}</strong></td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
