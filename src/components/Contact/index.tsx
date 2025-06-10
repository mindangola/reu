import { LeftSection } from './ContactInfo'
import { Form } from './Form'

export function Contact() {
  return (
    <section id="contactos" className=" mb-20 py-16 md:py-28 xl:py-32">
      <LeftSection />
      <div className="max-w-6xl w-full flex flex-col items-center mx-auto px-5 sm:px-8 xl:p-0">
        
        <div className="flex w-full flex-col md:flex-row gap-8 mt-10">
          <div className="w-full overflow-hidden border-primary border-spacing-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7883.191950197591!2d13.257581428568544!3d-8.917099779499754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5d9dc51eddb%3A0xbdccc009e113a48d!2sCamama%2C%20Luanda!5e0!3m2!1spt-PT!2sao!4v1748718224183!5m2!1spt-PT!2sao"
              width="800"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full shadow-lg bg-white">
            <div className="w-full flex flex-col p-8 pb-0">
              <p className='uppercase text-primary-muted-foreground text-lg'>Contacto</p>
              <h2 className=" flex-none space-x-2 items-center w-full text-3xl font-bold leading-tight text-primary sm:text-[40px] sm:leading-[1.2]">
                Fale connosco
              </h2>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
