'use client'

import { ArrowRightCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const links = [
    { href: '/', name: 'Home' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#servicos', name: 'Serviços' },
    { href: '#projectos', name: 'Projectos' },
    { href: '#contactos', name: 'Contactos' },
  ]

  return (
    <div className="h-[780px] flex flex-col bg-cover relative bg-primary">
      <header className="w-full py-8 z-30 sticky">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="w-48">
            <img src="/assets/logo.svg" alt="logo" />
          </div>

          <nav className="flex items-center">
            <ul className="flex gap-8">
              {links.map((link) => {
                return (
                  <li
                    key={link.href}
                    className={`text-lg  font-sans ${pathname.includes(link.href) ? 'text-white border-b-3 border-secondary' : 'text-white'} hover:text-primary font-bold`}
                  >
                    <Link href={link.href}>{link.name}</Link>
                    
                  </li>
                )
              })}
            </ul>
          </nav>

         

          <Link href="#contactos">
            <button className="border-2 font-sans text-lg  border-secondary font-bold h-10 rounded-md flex items-center justify-center text-white px-4">
              Contactar
            </button>
          </Link>
        </div>
      </header>

      <div className="w-full flex-1 z-20">
        <div className="max-w-6xl mx-auto h-full flex justify-between">
          <div className="w-1/2 max-w-[665px]  pt-32 flex flex-col">
            <p className="uppercase text-white mb-4 text-lg">consultoria empresaria</p>
            <h1 className="text-5xl text-white font-bold leading-tight mb-4">
              As melhores soluções para empresas modernas
            </h1>

            <h3 className="text-white text-2xl max-w-[649px]">
              Este site está em desenvolvimento pela Espaços Aberto.
            </h3>

            <div className='grid grid-cols-2 gap-4 mt-15'>
              <div className='flex items-center gap-2'> 
                <ArrowRightCircle className='text-secondary'/>
                <p className='text-white'>Êtica e Transparência</p>
              </div>
              <div className='flex items-center gap-2'> 
                <ArrowRightCircle className='text-secondary'/>
                <p className='text-white'>Êtica e Transparência</p>
              </div>
              <div className='flex items-center gap-2'> 
                <ArrowRightCircle className='text-secondary'/>
                <p className='text-white'>Êtica e Transparência</p>
              </div>
            </div>

            <div className="flex gap-10 mt-15">
              <Link href="#contactos">
                <button className="border-2 font-sans text-lg uppercase  border-secondary font-bold h-12 rounded-md flex items-center justify-center text-white px-8">
                  Contactar
                </button>
              </Link>

              <Link href="#sobre">
                <button className="bg-secondary uppercase font-bold font-sans h-12 rounded-md flex items-center justify-center text-white px-8">
                  Saber Mais
                </button>
              </Link>
            </div>
          </div>

          <div className='w-[50%] flex flex-col h-full items-end justify-end'>
            <img src="/assets/woman-hero.png" alt="" className='w-full' />
            <img src="/assets/element.png" alt="" className='-translate-x-10 absolute -z-10' />
          </div>
        </div>
      </div>
    </div>
  )
}
