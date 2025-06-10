'use client'

import clsx from 'clsx'
import Image from 'next/image'

interface TestemonialCardProps {
  testemonial: {
    id: number,
    name: string,
    role: string,
    description: string,
    image: string,
  },
}

export function TestemonialCard({ testemonial }: TestemonialCardProps) {
  return (
    <div
      className={clsx(
        'w-full max-w-5xl p-8  md:p-10 lg:p-10 bg-white md:h-96 lg:h-[490px] gap-8 sm:gap-8  group  shadow-lg  rounded-2xl flex flex-col md:flex-row md:items-center justify-center',
      )}
    > 
      <div className='bg-primary flex-none w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]'>
          <Image
              src={String(testemonial.image)}
              alt="Icon"
              className="w-full aspect-square object-cover h-full"
              width={1100}
              height={1100}
          />
      </div>
      <div className='h-full'>
        <div className='flex flex-col justify-between h-full  py-8 sm:py-8 rounded-2xl'>
          <div>
            <div>
              <h2 className="mb-4 flex-none space-x-2 items-center text-3xl font-semibold leading-tight text-primary sm:text-[40px] sm:leading-[1.2]">
              Testemunho
              </h2>
            </div>
            <div className='space-y-2'>
              <p
                className={clsx(
                  'line-clamp-5 text-gray-600  sm:text-lg lg:text-xl mb-10',
                )}
              >
                {testemonial.description}
              </p>
            </div>
          </div>


          <div>
            <h4 className={clsx('font-bold text-lg md:text-2xl')}>
              {testemonial.name}
            </h4>
            <p className="text-sm sm:text-base text-gray-500">
              {' '}
              {testemonial.role}{' '}
            </p>
          </div>
          <div className='w-full flex justify-end'>
            <Image src="/assets/virgulas.svg" alt="virgulas" width={55} height={54} />
          </div>
        </div>
      </div>

      
    </div>
  )
}
