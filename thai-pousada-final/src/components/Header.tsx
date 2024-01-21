import { Container } from '../components/Container2'
import '@fortawesome/fontawesome-free/css/all.min.css';

export function Header() {
  return (
    <div className="rounded-4xl bg-custom-red">
      <Container>
        <div className="flex justify-between items-center bg-custom-red text-white py-4">
        <div className="flex items-center">
            {/* Ícones das redes sociais */}
            <span className="fab fa-facebook-f ml-2"></span>
            <span className="fab fa-instagram ml-2"></span>
            <span className="fab fa-whatsapp ml-2"></span>
          </div>

          <div className="flex items-center">
            {/* Ícone do WhatsApp */}
            <span className="fab fa-whatsapp ml-2"></span>
            <span className="ml-2 text-lg">(12) 99143-0148</span>

            {/* Ícone de Email */}
            <span className="far fa-envelope  ml-4"></span>
            <span className="ml-2 text-lg">reservas@thaipousada.com.br</span>
          </div>
        </div>
      </Container>
    </div>
  )
}