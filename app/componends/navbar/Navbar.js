import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <nav className='bg-[#5c8652]'>
        <Image src="/Images/navbar/deforestation-word-logo.png" width={auto} height={auto} />
        <button>english</button>
        <div>|</div>
        <button>spanish</button>
        <Image src="/Images/navbar/login.svg" width={auto} height={auto} />
        <button>LogIn</button>
        {/* <Image src="/Images/navbar/logout.svg" width={auto} height={auto} /> */}
      </nav>
    </>
  )
}
