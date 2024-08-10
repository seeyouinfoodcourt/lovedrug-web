import { Button } from '@/components/ui/button';
import Image from 'next/image';
import products from '@/mockdata/products.json';
import Link from 'next/link';

export default function Decks() {
  return (
    <div className="flex flex-row flex-wrap">
      {products.products.map((product) => (
        <div
          style={{ backgroundColor: product.backgroundColor.primary }}
          key={product.id}
          className="flex w-full md:w-1/2 xl:w-1/4 h-screen justify-center items-center"
        >
          <Link href={`/decks/${product.slug}`}>
            <Image
              src={`/img/${product.image}`}
              style={{ objectFit: 'contain', width: '100%' }}
              width={300}
              height={300}
              alt={'swag'}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
