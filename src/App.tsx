import { Faq } from './components/Faq';
import { FinalCta, Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Business, Categories, HowItWorks, Problem, Professionals, Trust } from './components/Sections';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problem />
        <HowItWorks />
        <Professionals />
        <Categories />
        <Plans />
        <Business />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
