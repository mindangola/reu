import { ServiceCard } from './ServiceCard'

export function Service() {
  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-28 xl:py-32 bg-cover">
      <div className="max-w-6xl w-full flex flex-col items-center mx-auto">
        <div className="w-full flex items-center justify-between mb-10">
          <div>
            <p className='uppercase text-primary-muted-foreground text-lg'>serviços</p>
            <h2 className="mb-4 flex-none space-x-2 items-center text-3xl font-semibold leading-tight text-primary sm:text-[40px] sm:leading-[1.2]">
              Quais serviços oferecemos <br />
              para o seu negócio
            </h2>
          </div>
          <p className="text-primary-muted-foreground font-sans w-1/2">
            Oferecemos um portfólio completo de serviços voltados para a
            valorização e o crescimento do setor imobiliário e financeiro em
            Angola.
          </p>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
        </div>
      </div>
    </section>
  )
}
