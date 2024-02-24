import { Container } from '../components/Container2'
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
  return (
    // Adicionado classes para fixar o cabeçalho
    <div className="fixed top-0 left-0 w-full z-50 rounded-4xl bg-custom-red">
      <Container>
        <div className="flex flex-wrap justify-between items-center text-white py-4">
          <div className="flex items-center">
            {/* Ícones das redes sociais */}
            {/*<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-white">
              <span className="fab fa-facebook-f"></span>
            </a>*/}
            <a href="https://www.instagram.com/thai.pousada/" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-white">
              <span className="fab fa-instagram"></span>
            </a>
          </div>

          <div className="flex items-center flex-wrap">
            {/* Ícone do WhatsApp */}
            <a href="https://wa.me/5512991430148" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
              <span className="fab fa-whatsapp ml-2"></span>
              <span className="ml-2 text-lg hidden md:inline">(12) 99143-0148</span>
            </a>

            {/* Ícone de Email */}
            <a href="mailto:reservas@thaipousada.com.br" className="flex items-center hover:text-white ml-4 md:ml-6">
              <span className="far fa-envelope"></span>
              <span className="ml-2 text-lg hidden md:inline">reservas@thaipousada.com.br</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}