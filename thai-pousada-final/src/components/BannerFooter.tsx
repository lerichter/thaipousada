import { Container } from '../components/Container2'


export function BannerFooter() {
  return (
    <div className="rounded-4xl bg-custom-white">
      <Container>
        <div className="text-center bg-custom-white text-custom-red font-bold">
          &copy; {new Date().getFullYear()} Thai Pousada
        </div>
        
      </Container>
    </div>
  )
}