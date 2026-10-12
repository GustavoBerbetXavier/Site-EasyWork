# Site EasyWork

Site institucional do **EasyWork**, plataforma que conecta pessoas a profissionais e empresas prestadoras de serviços.
Feito com React, Vite e TypeScript, com a mesma identidade visual do aplicativo.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Outros comandos:

| Comando | O que faz |
|---|---|
| `npm run build` | Gera a versão de produção na pasta `dist` (inclui a checagem de TypeScript) |
| `npm run preview` | Abre a versão de produção para conferir |
| `npm run typecheck` | Só a checagem de TypeScript |

## Configuração

Copie `.env.example` para `.env` (ou cadastre na Vercel em **Settings > Environment Variables**):

| Variável | Para que serve | Padrão |
|---|---|---|
| `VITE_APP_URL` | Endereço do aplicativo, usado em todos os botões de acesso | `https://easywork-teste.vercel.app` |
| `VITE_CONTACT_WHATSAPP` | WhatsApp comercial (só números, com DDI e DDD: `5544999990000`) | vazio |
| `VITE_CONTACT_EMAIL` | E-mail comercial | vazio |

Sem WhatsApp e sem e-mail, o botão do plano Empresarial leva ao cadastro de profissional no app.

## Publicar na Vercel

Importe este repositório em **Add New > Project**. A Vercel reconhece o Vite sozinha:
build `npm run build`, pasta `dist`. Cada `git push` publica uma nova versão.

## Onde editar

- Textos, planos, comparativo, categorias e perguntas: `src/data/content.ts`
- Links e contatos: `src/config.ts` (lê as variáveis acima)
- Cores e estilos: `src/styles.css` (mesma paleta do app)
- Seções: `src/components/`

Os preços dos planos precisam ser iguais aos do aplicativo (`src/lib/plans.ts` no repositório do app).
