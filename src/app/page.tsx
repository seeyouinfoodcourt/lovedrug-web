import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={'/img/lovedrug-logo-white.png'}
        width={500}
        height={80}
        alt="Lovedrug Logo"
      />
    </div>
  );
}
