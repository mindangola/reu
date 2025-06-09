
export async function OurNumberSection() {
  const numbers = [
    {name: "Projectos", value: 200},
    {name: "Clientes", value: 200},
    {name: "Premios", value: 200},
    {name: "Clientes satisfeitos", value: 200},
  ]

  return (
    <section className="w-full  bg-white bg-no-repeat bg-bottom bg-cover relative">
      <div className="w-full h-full bg-white z-0 absolute" />
      <div className="max-w-6xl px-8 xl:px-0 py-16  md:py-20 lg:py-13 z-10 relative mx-auto grid grid-cols-1 gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {numbers?.map((number) => {
          return (
            <div
              key={number.name}
              className={`flex flex-col items-center justify-start`}
            >
              <div>
                <h3 className="text-5xl md:text-6xl text-primary font-bold">
                  {number.value}+
                </h3>
                <p className="font-2xl text-primary-muted-foreground mt-4 text-center">
                  {number.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
