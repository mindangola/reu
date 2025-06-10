'use client'

import { ArrowRightCircle, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const links = [
    { href: '/', name: 'Home' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#servicos', name: 'Serviços' },
    { href: '#contactos', name: 'Contactos' },
  ]

  return (
    <div className="xl:h-[880px] flex flex-col overflow-hidden bg-cover relative bg-primary">
      <header className="w-full py-8 z-30 sticky">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 xl:px-0 flex items-center justify-between">
          <div className="w-48">
            <Link href="/">
              <img src="/assets/logo.svg" alt="logo" />
            </Link>
          </div>

          <nav className="md:flex items-center hidden">
            <ul className="flex gap-8">
              {links.map((link) => {
                return (
                  <li
                    key={link.href}
                    className={`text-lg  font-sans ${pathname.includes(link.href) ? 'text-white border-b-3 border-secondary' : 'text-white'} hover:border-b-3 hover:border-secondary transition-all font-bold`}
                  >
                    <Link href={link.href}>{link.name}</Link>
                    
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className='block md:hidden'>
            <button className='w-10 text-white h-10'>
              <MenuIcon size={32}/>
            </button>
          </div>

         
          <div className='hidden lg:flex'>
            <Link href="#contactos">
              <button className="border-2 font-sans text-lg cursor-pointer hover:bg-secondary transition-colors  border-secondary font-bold h-10 rounded-md flex items-center justify-center text-white px-4">
                Contactar
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="w-full flex-1 z-20">
        <div className="max-w-6xl mx-auto h-full relative flex px-5 sm:px-8 xl:px-0 flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 max-w-[665px] py-16  md:py-28  xl:py-32 flex flex-col">
            <p className="uppercase text-white mb-4 text-lg">consultoria empresaria</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4">
              As melhores soluções para empresas modernas
            </h1>

            <h3 className="text-white text-lg sm:text-2xl max-w-[649px]">
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
                <button className="border-2 font-sans cursor-pointer hover:bg-secondary transition-colors text-lg uppercase  border-secondary font-bold h-12 rounded-md flex items-center justify-center text-white px-8">
                  Contactar
                </button>
              </Link>

              <Link href="#sobre">
                <button className="bg-secondary uppercase cursor-pointer hover:bg-secondary/70 transition-colors font-bold font-sans h-12 rounded-md flex items-center justify-center text-white px-8">
                  Saber Mais
                </button>
              </Link>
            </div>
          </div>

          <div className='md:w-[50%] flex mt-10 md:mt-0 flex-col h-full items-center md:items-end justify-end'>
            <img src="/assets/woman-hero.png" alt="" className='w-full md:w-[65%] invert-100 lg:w-[65%] -z-10 lg:right-8 xl:right-20 bottom-0 md:absolute ' />
            <img src="/assets/element.png" alt="" className='-translate-x-10 absolute bottom-0 -z-20' />
          </div>
        </div>
      </div>
    </div>
  )
}
