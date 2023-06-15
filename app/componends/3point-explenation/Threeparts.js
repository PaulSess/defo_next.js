import Image from 'next/image'

export default function Threeparts() {
  return (
    <>

        <section className='flex'>
          <div className="about-card">
            <Image className='rounded' src="/public/Images/landingpage/Threeparts/berend-leupen-monkey.jpg" width={150} height={150} />
            <p className="hidden">Utilizamos imágenes por satélite para vigilar el terreno con una precisión inigualable. Esto nos permite identificar posibles problemas o peligros, detectar y documentar la deforestación y proteger el medio ambiente.</p>
          </div>

          <div className="about-card">
            <Image className='rounded' src="/public/Images/landingpage/Threeparts/hossein-saberi-fire.jpg" width={150} height={150} />
            <p className="hidden">Nuestro modelo de aprendizaje profundo evalúa imágenes de satélite para detectar actividades ilegales como quemas y talas en el bosque. Esto nos ayuda a identificar y responder a las amenazas medioambientales con rapidez y precisión.</p>

          </div>

          <div className="about-card">
            <Image className='rounded' src="/public/Images/landingpage/Threeparts/satellite-cut.jpg" width={150} height={150} />
            <p className="hidden">Nuestra misión es conservar la naturaleza y el medio ambiente para las generaciones futuras promoviendo el desarrollo sostenible y protegiendo el entorno natural. Trabajamos con las comunidades, utilizando nuestra tecnología y experiencia para crear un mundo más sostenible.</p>
          </div>
        </section>

    </>
  )
}
