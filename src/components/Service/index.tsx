import { ServiceCard } from './ServiceCard'

import services from './services.json'

export function Service() {
  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-28 xl:py-32 bg-cover">
      <div className="max-w-6xl w-full flex flex-col px-5 sm:px-8 xl:px-0 items-center mx-auto">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <p className='uppercase text-primary-muted-foreground text-lg'>serviços</p>
            <h2 className="mb-4 flex-none space-x-2 items-center text-3xl font-semibold leading-tight text-primary sm:text-[40px] sm:leading-[1.2]">
              Quais serviços oferecemos <br />
              para o seu negócio
            </h2>
          </div>
          <p className="text-primary-muted-foreground font-sans md:w-1/2">
            Soluções completas para estruturar, fortalecer e expandir a sua empresa com estratégia e inovação.
          </p>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            services.map((service)=>{
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
