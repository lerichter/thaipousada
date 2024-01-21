import { Container } from '../components/Container2'

export function BannerFooter() {
  return (
    <div className="rounded-4xl bg-custom-red">
      <Container>
        <div className="text-center bg-custom-red text-white">
          &copy; {new Date().getFullYear()} Thai Pousada
        </div>
      </Container>
    </div>
  )
}