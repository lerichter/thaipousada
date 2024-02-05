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

// const redesSociais = [
//   // Adicione as informações das redes sociais aqui
//   // Exemplo: { nome: "Facebook", url: "https://facebook.com", icone: iconeFacebook }
// ];

export function Footer() {
  return (
    <>
      <div className="rounded-4xl bg-custom-red">
        <BookNow />
        <div className="rounded-4xl bg-custom-white py-14">
          <Container>
            <div className="flex flex-wrap justify-evenly">
              <div className="mb-4 text-red-600">
                <h3 className="font-bold mb-2 text-2xl">Nossos Contatos</h3>
                {contatos.map((contato, index) => (
                  <p key={index} className="mb-1 text-red-600 text-lg">{contato.valor}</p>
                ))}
              </div>
              <div className="mb-4 text-red-600">
                <h3 className="font-bold mb-2 text-2xl">Onde Estamos</h3>
                <address className='text-lg'>
                  {localizacao.endereco}<br />
                  {localizacao.bairro}<br />
                  {localizacao.cep}<br />
                  {localizacao.cidade}
                </address>
              </div>
              <div className="mb-4 text-red-600">
                <h3 className="font-bold mb-2 text-2xl">Nossas Redes</h3>
              </div>
            </div>
          </Container>
        </div>
        <BannerFooter />
      </div>
    </>
  );
};