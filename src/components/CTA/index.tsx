import Image from "next/image";

export function CTA() {
  return (
    <section
      id="cta"
      className=" pb-8 bg-primary"
    >
      <div className="max-w-6xl mx-auto px-5 xl:px-0 py-16 sm:py-24 md:py-28 xl:py-32">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-col md:flex-row md:h-auto lg:h-[670px] gap-16 items-center">
            <div className="w-full md:px-4 lg:w-1/2">
              <div className='flex flex-col mb-10'>
                <p className='uppercase text-white text-lg'>Consultoria empresarial</p>
                <h2 className="text-4xl md:text-[40px] text-white font-bold">
                  Para Quem Servimos
                </h2> 
              </div>
              <div className=" space-y-4 max-w-[540px] lg:mb-0 animate-fade-up animate-once animate-duration-[2000ms]">
                <p className="text-base leading-relaxed text-white">
                  <strong>Empreendedores e Startups:</strong> Indivíduos com ideias inovadoras ou em processo de iniciar um negócio, que necessitam de orientação estratégica, suporte legal, estruturação empresarial e entrada eficaz no mercado.
                </p>
                <p className=" text-base leading-relaxed text-white">
                  <strong>Pequenas e Médias Empresas (PMEs):</strong>  Empresas já em operação que buscam otimizar sua performance, expandir seus mercados ou aperfeiçoar a sua gestão financeira, jurídica e operacional.
                </p>
                <p className=" text-base leading-relaxed text-white">
                  <strong>Empresas em Fase de Expansão:</strong> Organizações que já atingiram certa maturidade e desejam crescer, seja por meio de novos produtos, mercados geográficos ou canais de distribuição, tanto a nível nacional quanto internacional.
                </p>
                <p className=" text-base leading-relaxed text-white">
                  <strong>Profissionais Independentes e Investidores:</strong> Autónomos, freelancers ou investidores que buscam apoio na estruturação de negócios, entrada em novos mercados, identificação de oportunidades ou segurança jurídica em suas operações e investimentos.
                </p>  
              </div>

              <button className="w-auto mt-8 bg-secondary uppercase font-bold font-sans h-12 rounded-md flex items-center justify-center text-white px-16">
                Contactar
              </button>
            </div>

            <div className='w-full lg:w-1/2 h-full bg-white rounded-md overflow-hidden flex'>
                <Image src="/assets/cta.jpg" className='w-full h-auto object-cover' alt="about image" width={3080} height={3080} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
