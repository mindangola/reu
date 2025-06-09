import { Eye, Flag, Heart } from "lucide-react"

export function MissionAndValueSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center p-4 rounded-lg">
            <div className="flex items-center flex-col gap-3 mb-4">
              <Flag strokeWidth={1} className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-center text-primary">Missão</h2>
            </div>
            <p className="text-primary-muted-foreground text-sm text-center leading-relaxed">
              Ser transparente com os clientes, fornecer informações claras e precisas sobre as opções disponíveis, riscos e custos.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-lg">
            <div className="flex items-center flex-col gap-3 mb-4">
              <Eye strokeWidth={1} className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-center text-primary">Visão</h2>
            </div>
            <p className="text-primary-muted-foreground text-sm text-center leading-relaxed">
              Ajudar empresas e empreendedores a crescer de forma sustentável e segura, oferecendo suporte em processos de criação de negócios, adaptação legal e análise de mercado para decisões mais informadas e eficazes.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-lg">
            <div className="flex items-center flex-col gap-3 mb-4">
              <Heart strokeWidth={1} className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-center text-primary">Valores</h2>
            </div>
            <p className="text-primary-muted-foreground text-sm text-center leading-relaxed"> Ser a principal referência em consultoria empresarial em Angola, reconhecida por apoiar os nossos clientes a alcançar crescimento sustentável, inovador e seguro. Contribuir com impacto positivo o mercado angolano e contribuir para o desenvolvimento de negócios bem-sucedidos em todo o mundo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
