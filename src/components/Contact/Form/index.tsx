'use client'

import { useForm as useFormpree } from '@formspree/react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Oval } from 'react-loader-spinner'
import * as yup from 'yup'

import { LucideCheckCircle } from 'lucide-react'

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório!'),
  email: yup.string().required('Email obrigatório').email('Email não valido!'),
  telefone: yup.string().required(),
  empresa: yup.string().optional(),
  mensagem: yup.string().min(20, 'Mínimo 20 caracteres!'),
})

export function Form() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formState, sendToFormspree] = useFormpree('dadhaksh')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form
      onSubmit={handleSubmit(sendToFormspree)}
      className="w-full p-8 bg-white"
    >
      {isSubmitted && (
        <div className="w-full h-16 gap-2 flex items-center justify-center mb-4 rounded-lg bg-[#40DDB6] text-white font-bold">
          <LucideCheckCircle size={24} />
          Sua mensagem foi submetida com sucesso!
        </div>
      )}
      <div className="mb-4">
        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Nome</label>
        <input
          {...register('nome')}
          type="text"
          placeholder="Digite o seu nome"
          className="'flex h-9 w-full rounded-md border border-[#8f8f8f] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-primary-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'"
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.nome?.message ? errors?.nome?.message : ''}
          </p>
        }
      </div>

      <div className='flex gap-4'>
        <div className="mb-4">
          <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Email</label>
          <input
            {...register('email')}
            type="text"
            placeholder="Digite o email"
            className="'flex h-9 w-full rounded-md border border-[#8f8f8f] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-primary-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'"
          />
          {
            <p className="text-red-500 h-4 text-sm">
              {errors?.email?.message ? errors?.email?.message : ''}
            </p>
          }
        </div>
        <div className="mb-4">
          <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Telefone</label>
          <input
            {...register('telefone')}
            type="text"
            placeholder="Digite o contacto"
            className="'flex h-9 w-full rounded-md border border-[#8f8f8f] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-primary-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'"
          />
          {
            <p className="text-red-500 h-4 text-sm">
              {errors?.telefone?.message ? errors?.telefone?.message : ''}
            </p>
          }
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="w-full">
          <label htmlFor="empresa">Empresa (Opcional)</label>
          <input
            id="empresa"
            {...register('empresa')}
            type="text"
            placeholder="Digite a empresa"
            className="'flex h-9 w-full rounded-md border border-[#8f8f8f] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-primary-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'"
          />
          {
            <p className="text-red-500 h-4 text-sm">
              {errors?.empresa?.message ? errors?.empresa?.message : ''}
            </p>
          }
        </div>
      </div>

      <div className="mb-4">
        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Mensagem</label>
        <textarea
          {...register('mensagem')}
          className="h-28 flex min-h-[60px] w-full rounded-md border border-[#8f8f8f] bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-primary-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          placeholder="Digite sua mensagem"
        />
        {
          <p className="text-red-500 h-4 text-sm">
            {errors?.mensagem?.message ? errors?.mensagem?.message : ''}
          </p>
        }
      </div>
      <button className="w-auto bg-secondary uppercase font-bold font-sans h-12 rounded-md flex items-center justify-center text-white px-16">
        {isSubmitting ? (
          <Oval
            visible={true}
            height="20"
            width="20"
            color="rgb(17 149 255)"
            secondaryColor="rgb(26 86 219) "
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  )
}
 