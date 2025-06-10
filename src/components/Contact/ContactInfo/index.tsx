import { Clock, LucideMapPin, Mail, Phone } from 'lucide-react'

export async function LeftSection() {
  return (
    <div className="w-full bg-white mb-24">
      <div className="max-w-6xl mx-auto flex-1 flex-col md:flex-row flex justify-between gap-8">
        <div className="flex flex-col items-center gap-4 rounded-md bg-cover bg-no-repeat p-8 bg-center">
          <div className="w-10 h-10 flex-none rounded-full bg-secondary text-white flex items-center justify-center">
            <LucideMapPin />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base text-primary mb-2">
              Localização
            </h3>

            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              Camama, Luanda,Angola
            </p>
            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              Brigada, Luanda,Angola
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-md bg-cover bg-no-repeat p-8 bg-center">
          <div className="w-10 h-10 flex-none rounded-full bg-secondary text-white flex items-center justify-center">
            <Mail />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base text-primary mb-2">
              Email
            </h3>

            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              ramironzau@gmail.com
            </p>
            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              ramirofrancisco962014@gmail.com
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center gap-4 rounded-md bg-cover bg-no-repeat p-8 bg-center">
          <div className="w-10 h-10 flex-none rounded-full bg-secondary text-white flex items-center justify-center">
            <Phone />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base text-primary mb-2">
              Telefone
            </h3>

            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              +244 941278597
            </p>
            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              +244 941278597
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center gap-4 rounded-md bg-cover bg-no-repeat p-8 bg-center">
          <div className="w-10 h-10 flex-none rounded-full bg-secondary text-white flex items-center justify-center">
            <Clock />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-base text-primary mb-2">
              Horário de abertura
            </h3>

            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              Seg. - Sext: 8h30 - 17h30
            </p>
            <p className="text-primary-muted-foreground text-sm sm:text-[15px]">
              Sab. - Dom: Fechado
            </p>
          </div>
        </div>

        
      </div>
    </div>
  )
}
