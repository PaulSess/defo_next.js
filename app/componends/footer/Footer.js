import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <Footer className="flex bg-[#425c75]">
        <section>
          <div>
            <Image src="/public/Images/navbar/deforestation-word-logo.png" width={auto} height={auto} />
            <hr></hr>
          </div>

          <div>
            <button>Contacto</button>
            <button>Si surge algún problema, no dudes en ponerte en</button>
            <button>Contáctenos en<Image src="/public/Images/footer/envelope-solid.svg" width={10} height={10}/></button>
          </div>
        </section>

        <div>© [2023] [Deforestación]. Todos los derechos reservados.</div>
      </Footer>
    </>
  )
}
