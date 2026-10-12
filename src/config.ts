// Links e contatos do site. Configure pelas variáveis de ambiente (veja .env.example e README.md).

const appUrl = (import.meta.env.VITE_APP_URL as string | undefined)?.trim() || 'https://easywork-teste.vercel.app';
const whatsapp = ((import.meta.env.VITE_CONTACT_WHATSAPP as string | undefined) ?? '').replace(/\D/g, '');
const email = ((import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? '').trim();

export const config = {
  /** Aplicativo EasyWork (versão web). */
  appUrl,
  /** Cadastro direto como profissional (tela de login do profissional no app). */
  appProfessionalUrl: `${appUrl.replace(/\/$/, '')}/login?role=profissional`,
  /** Cadastro direto como contratante. */
  appClientUrl: `${appUrl.replace(/\/$/, '')}/login?role=contratante`,
  whatsappUrl: whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá! Quero saber mais sobre o plano Empresarial do EasyWork.')}` : '',
  email,
  city: 'Campo Mourão, PR',
};

/** Melhor canal de contato comercial disponível: WhatsApp, depois e-mail, depois o próprio app. */
export function businessContact() {
  if (config.whatsappUrl) return { href: config.whatsappUrl, label: 'Falar no WhatsApp', external: true };
  if (config.email) return { href: `mailto:${config.email}?subject=${encodeURIComponent('Plano Empresarial EasyWork')}`, label: 'Enviar e-mail', external: false };
  return { href: config.appProfessionalUrl, label: 'Criar perfil da empresa', external: true };
}
