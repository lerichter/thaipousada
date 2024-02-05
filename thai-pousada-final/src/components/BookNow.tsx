import { Container } from '@/components/Container2'

export function BookNow() {
  return (
    <>
      <div className="rounded-4xl bg-custom-red py-20">
        <Container>
          <div className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-white sm:text-left">
              RESERVE AGORA
            </h2>
            <div className="h-px flex-auto bg-white" />
          </div>
          <div>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-2 text-white"
            >
              <div>
                <p className='text-xl'>
                  Venha para a Thai Suites em Itamambuca! Praia, natureza, esportes radicais,
                  muito verde, super aconchegante e tranquilo. Esperamos por você!
                </p>
              </div>
            </ul>
            <button className="bg-white text-custom-red font-bold py-2 px-8 mt-10 rounded hover:bg-red-700 hover:text-white transition-colors duration-300">
              RESERVAR
            </button>
          </div>
        </Container>
      </div>
    </>
  )
}