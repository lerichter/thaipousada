/* eslint-disable @next/next/no-sync-scripts */

import { Container } from '../components/Container2'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importar o estilo CSS para personalizar o widget
import '@/styles/customWidgetStyles.css' 

export function Widget() {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-40 bg-blue rounded-4xl">
        <Container>
          <div className="flex flex-wrap justify-between items-center text-white py-4">
            {/* O script do widget permanece o mesmo */}
            <script src="https://hotels.cloudbeds.com/widget/load/bPfQcZ/float?newWindow=1"></script>
          </div>
        </Container>
      </div>
    </>
  )
}