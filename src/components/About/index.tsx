import Image from 'next/image'
import { MissionAndValueSection } from './Missionandvalues'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className=" pb-8 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="max-w-6xl mx-auto px-5 xl:px-0 py-16 sm:pt-24 md:pt-28 xl:pt-32">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-col md:flex-row md:h-auto gap-8 items-center">
            <div className='w-full lg:w-1/2 bg-primary h-full rounded-md overflow-hidden flex'>
                <Image src="/assets/banner1.jpg" className='w-full h-auto object-cover' alt="about image" width={2080} height={1680} />
            </div>

            <div className="w-full md:px-4 lg:w-1/2">
              <div>
                <p className='uppercase text-primary-muted-foreground text-lg'>Sobre</p>
                <h2 className="mb-4 flex-none space-x-2 items-center text-3xl font-semibold leading-tight text-primary sm:text-[40px] sm:leading-[1.2]">
                  Conheça nossa história
                </h2>
              </div>
              <div className="mb-12 md:max-w-[540px] lg:mb-0 animate-fade-up animate-once animate-duration-[2000ms]">
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  A Kbusiness é uma empresa multiárea com presença nas áreas de Água & Saneamento, Agronegócio e Comunicação Visual. Atuamos como fornecedores estratégicos de soluções químicas, produtos agrícolas e serviços gráficos, sempre guiados por responsabilidade, inovação e compromisso com o cliente.
                </p>
              </div>

             
            </div>

            
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        
        <MissionAndValueSection />
      </div>
    </section>
  )
}
