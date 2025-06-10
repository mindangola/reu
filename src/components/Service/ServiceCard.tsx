import Link from "next/link";

export function ServiceCard() {
    return (
        <div className="bg-white space-y-4 p-13 overflow-hidden rounded-md shadow-md">
            <div className="text-white rounded-full text-3xl mb-2">
              <img src="/assets/service1.jpg" alt="Service 1" className="w-full" />
            </div>
            <div className="mt-4">
                <h3 className="text-2xl text-primary mb-4 font-bold">
                    Gestão de Activos Imobiliários
                </h3>
                <p className="text-primary-muted-foreground line-clamp-3">
                Avaliamos e gerimos ativos com foco na sua rentabilização e
                valorização. Seja para uso próprio, venda ou arrendamento,
                transformamos propriedades em patrimónios de valor.
                </p>
                <div className="flex mt-8 ">
                    <Link href="#sobre">
                        <button className=" font-sans text-lg uppercase bg-secondary font-bold h-10 rounded-md flex items-center justify-center text-white px-8">
                            Saiba mais
                        </button>
                    </Link>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}