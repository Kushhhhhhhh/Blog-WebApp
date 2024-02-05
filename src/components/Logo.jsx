import LogoImg from '../assets/logo.png'

const Logo = () => {
  return (
    <div className='grid place-items-center grid-cols-2'>
  <img 
    src={LogoImg} 
    alt="app-logo"
    className='w-10 shadow-2xl transform transition-transform hover:scale-110'
  />
  <p className='text-3xl mb-1 font-semibold text-white font-sans shadow-xl hover:text-purple-200 transform transition-transform hover:scale-110'>
    Blogify
  </p>
</div>

  )
}

export default Logo
