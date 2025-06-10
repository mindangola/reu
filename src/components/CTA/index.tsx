import Image from "next/image";

export function CTA() {
  return (
    <section
      id="cta"
      className=" pb-8 bg-primary"
    >
      <div className="max-w-6xl mx-auto px-5 xl:px-0 py-16 sm:py-24 md:py-28 xl:py-32">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-col md:flex-row md:h-auto lg:h-[580px] gap-16 items-center">
            <div className="w-full md:px-4 lg:w-1/2">
              <div className='flex flex-col mb-10'>
                <p className='uppercase text-white text-lg'>Consultoria empresarial</p>
                <h2 className="text-4xl md:text-[40px] text-white font-bold">
                  Soluções para progressivas para empresas
                </h2> 
              </div>
              <div className="mb-12 max-w-[540px] lg:mb-0 animate-fade-up animate-once animate-duration-[2000ms]">
                <p className="mb-10 text-base leading-relaxed text-white">
                  A Kbusiness é uma empresa multiárea com presença nas áreas de Água & Saneamento, Agronegócio e Comunicação Visual. Atuamos como fornecedores estratégicos de soluções químicas, produtos agrícolas e serviços gráficos, sempre guiados por responsabilidade, inovação e compromisso com o cliente.
                </p>
              </div>
              <button className="w-auto bg-secondary uppercase font-bold font-sans h-12 rounded-md flex items-center justify-center text-white px-16">
                Contactar
              </button>
            </div>

            <div className='w-full lg:w-1/2 h-full bg-white rounded-md overflow-hidden flex'>
                <Image src="/assets/woman-hero.png" className='w-full h-auto' alt="about image" width={3080} height={3080} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
