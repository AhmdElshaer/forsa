import bars from '../../assets/images/bars.svg';
import login from '../../assets/images/Login.svg';
import signup from '../../assets/images/signup.svg';
import globe from '../../assets/images/fi-sr-globe.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-[81px] p-6 md:p-8 flex flex-row gap-[64px] items-center justify-end shadow-lg">
      <p className='hidden md:block'><Image  src={globe} alt='globeIcon' width={24}/></p>
      <p className='hidden md:block'><Image  src={login} alt='globeIcon' width={64}/></p>
      <p className='hidden md:block'><Image  src={signup} alt='globeIcon' width={84}/></p>
      <p ><Image  src={bars} alt='barsIcon' width={34}/></p>
    </header>
  )
}