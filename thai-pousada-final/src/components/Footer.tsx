import { Container } from '@/components/Container2'
import { BannerFooter } from '@/components/BannerFooter'
import { BookNow } from '@/components/BookNow'

const contatos = [
  { tipo: "Telefone", valor: "(12) 99143-0148" },
  { tipo: "Email", valor: "reservas@thaipousada.com.br" },
];

const localizacao = {
  endereco: "Rua das Amendoeiras, 55",
  bairro: "Praia do Itamambuca",
  cep: "CEP 11680-000",
  cidade: "Ubatuba/SP",
};

// Exemplo de como as informações das redes sociais podem ser estruturadas
const redesSociais = [
  { nome: "Facebook", url: "https://www.facebook.com", icone: "fab fa-facebook-f" },
  { nome: "Instagram", url: "https://www.instagram.com", icone: "fab fa-instagram" },
  { nome: "WhatsApp", url: "https://wa.me/5512991430148", icone: "fab fa-whatsapp" },
];

export function Footer() {
  return (
    <>
      <div className="rounded-4xl bg-custom-red">
        <BookNow />
        <div className="rounded-4xl bg-custom-red py-14">
          <Container>
            <div className="flex flex-wrap justify-evenly text-center md:text-left">
              <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
                <h3 className="font-bold mb-2 text-2xl text-custom-white">Nossos Contatos</h3>
                {contatos.map((contato, index) => (
                  <p key={index} className="mb-1 text-lg text-custom-white">{`${contato.tipo}: ${contato.valor}`}</p>
                ))}
              </div>
              <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
                <h3 className="font-bold mb-2 text-2xl text-custom-white">Onde Estamos</h3>
                <address className='text-lg text-custom-white not-italic'>
                  {localizacao.endereco}<br />
                  {localizacao.bairro}<br />
                  {localizacao.cep}<br />
                  {localizacao.cidade}
                </address>
              </div>
              <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4">
                <h3 className="font-bold mb-2 text-2xl text-custom-white">Redes Sociais</h3>
                <div className="flex justify-center md:justify-start">
                  {redesSociais.map((rede, index) => (
                    <a key={index} href={rede.url} target="_blank" rel="noopener noreferrer" className="text-custom-white hover:text-red-700 ml-2">
                      <span className={`${rede.icone} text-xl`}></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BannerFooter />
      </div>
    </>
  );
}