import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { FAQ } from '../data/content';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="section" aria-labelledby="duvidas-titulo">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 id="duvidas-titulo" className="section-title">Perguntas e respostas</h2>
        </div>
        <div className="faq">
          {FAQ.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.question} className="faq__item">
                <h3>
                  <button
                    type="button"
                    className="faq__button"
                    id={`faq-botao-${index}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-resposta-${index}`}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    {item.question}
                    <ChevronDown size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-resposta-${index}`} role="region" aria-labelledby={`faq-botao-${index}`} className="faq__panel" hidden={!expanded}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
