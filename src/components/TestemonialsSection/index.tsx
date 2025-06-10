'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { TestemonialCard } from './TestemonialCard'

import { testemonialsArray } from './serviceData'

export function TestemonialSection() {

  return (
    <section id='testemunhos' className="w-full py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl px-8 xl:px-0 mx-auto ">
        <Carousel
          plugins={[
            Autoplay({
                delay: 3000
            })
            ]}
            opts={{
                loop: true
            }}
        >
          <CarouselContent className="py-10">
            {testemonialsArray.map((testemonial) => {
              return (
                <CarouselItem
                  key={testemonial.id}
                  className="flex items-center justify-center"
                >
                  <TestemonialCard testemonial={testemonial} />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
