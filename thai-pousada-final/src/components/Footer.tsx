import { Container } from '../components/Container2'

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
      <div className="rounded-4xl bg-custom-red py-20 sm:mt-32 sm:py-32">
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
              <button className="bg-white text-custom-red font-bold py-2 px-8 rounded hover:bg-red-700 hover:text-white transition-colors duration-300">
                RESERVAR
              </button>
            </ul>
          </div>
        </Container>
      </div>
      <div className="container mx-auto">
        <Container>
          {/* Contact and location section */}
          <div className="flex flex-wrap justify-evenly border-t text-center border-white p-10">
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
              {/* Renderização dinâmica dos ícones das redes sociais
              {redesSociais.map((rede, index) => (
                // Renderize aqui o link e ícone para cada rede social
              ))} */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};