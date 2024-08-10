import Image from 'next/image';
import logo from '../../public/img/lovedrug-logo-white.png';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={logo}
        sizes="100vw"
        style={{ width: '40%', height: 'auto' }}
        alt="Lovedrug Logo"
      />
    </div>
  );
}
