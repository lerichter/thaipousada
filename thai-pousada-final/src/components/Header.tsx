import { Container } from '../components/Container2'
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
  return (
    <div className="rounded-4xl bg-custom-red">
      <Container>
        <div className="flex justify-between items-center bg-custom-red text-white py-4">
          <div className="flex items-center">
            {/* Ícones das redes sociais */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="fab fa-facebook-f ml-2"></span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="fab fa-instagram ml-2"></span>
            </a>
            <a href="https://wa.me/5512991430148" target="_blank" rel="noopener noreferrer">
              <span className="fab fa-whatsapp ml-2"></span>
            </a>
          </div>

          <div className="flex items-center">
            {/* Ícone do WhatsApp */}
            <a href="https://wa.me/5512991430148" target="_blank" rel="noopener noreferrer">
              <span className="fab fa-whatsapp ml-2"></span>
            </a>
            <span className="ml-2 text-lg">(12) 99143-0148</span>

            {/* Ícone de Email */}
            <a href="mailto:reservas@thaipousada.com.br">
              <span className="far fa-envelope ml-4"></span>
            </a>
            <span className="ml-2 text-lg">reservas@thaipousada.com.br</span>
          </div>
        </div>
      </Container>
    </div>
  )
}