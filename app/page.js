import Image from 'next/image'
import Navbar from './componends/navbar/Navbar'
import Navbar from './componends/3point-explenation/Threeparts'
import Navbar from './componends/footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <Image src='/Images/landingpage/lingchor-cut.jpg' width={100} height={100} />
      <h1>Bienvenido a la deforestación</h1>
      <h3>La plataforma para proteger la Amazonia. Rastreamos la tala y quema y otras actividades ilegales dentro de su área para apoyar su trabajo de conservación.</h3>
      <button>Empecemos!</button>

      <Image src='/Images/landingpage/donald-giannatti-sat-cut.jpg' width={100} height={100} />



      <Threeparts />

      <Footer />
    </>
  )
}
