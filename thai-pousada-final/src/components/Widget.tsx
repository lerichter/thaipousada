import { Container } from '../components/Container2'
import Script from 'next/script'
import '@fortawesome/fontawesome-free/css/all.min.css';

import '@/styles/customWidgetStyles.css' 

export function Widget() {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-40 bg-blue rounded-4xl">
        <Container>
          <div className="flex flex-wrap justify-between items-center text-white py-4">
            <script src="https://hotels.cloudbeds.com/widget/load/bPfQcZ/float?newWindow=1"></script>
          </div>
        </Container>
      </div>
    </>
  )
}