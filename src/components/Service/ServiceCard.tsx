import Link from "next/link";

interface ServiceCardProps {
    title: string,
    description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="bg-white space-y-4 p-10 overflow-hidden rounded-md shadow-md">
            
            <div className="mt-4">
                <h3 className="text-2xl text-primary mb-4 font-bold">
                    {title}
                </h3>
                <p className="text-primary-muted-foreground line-clamp-6">
                    {description}
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