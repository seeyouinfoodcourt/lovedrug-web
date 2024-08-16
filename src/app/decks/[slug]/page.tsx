import { Price } from '@/components/price';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import products from '@/mockdata/products.json';
import Image from 'next/image';

export default function DeckPage({ params }: { params: { slug: string } }) {
  const product = products.products.find((p) => p.slug === params.slug);
  return (
    <div className="grid md:grid-cols-2">
      <div className="">
        <div
          style={{
            backgroundColor: product?.backgroundColor.primary,
          }}
          className="w-full h-screen flex justify-center items-center"
        >
          <Image
            src={`/img/${product?.image}`}
            style={{ objectFit: 'contain', width: '60%' }}
            width={300}
            height={300}
            alt={'swag'}
          />
        </div>
        {/* <div className="w-full flex flex-col">
          <Image
            src={`/img/deck-close.png`}
            style={{ objectFit: 'contain', width: '100%' }}
            width={1000}
            height={347}
            alt={'swag'}
          />
          <div className="w-full h-screen p-4">
            <h2 className="font-black text-6xl uppercase mb-4">
              Real Wear Graphics
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit v
            </p>
          </div>
        </div>
        <div className="w-full flex">hej</div> */}
      </div>
      <div
        style={{ backgroundColor: product?.backgroundColor.secondary }}
        className="flex flex-col flex-1 min-h-screen justify-center items-center"
      >
        <div className="md:fixed md:top-0 md:right-0 w-1/2 h-screen flex justify-center items-center flex-col">
          <h1 className="font-black text-5xl uppercase">{product?.title}</h1>
          <Price value={30} currency="EUR" className="font-bold text-3xl" />
          <div className="mt-4 flex gap-2 flex-col justify-center items-center w-1/2">
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="flex-2">
                  <SelectValue placeholder="Select a shape" />
                </SelectTrigger>
                <SelectContent className="bg-primary border-4 text-white">
                  <SelectGroup>
                    <SelectItem className="text-2xl py-4" value="32mm Popsicle">
                      32mm Popsicle
                    </SelectItem>
                    <SelectItem className="text-2xl py-4" value="30mm Cruiser">
                      30mm Cruiser
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Mold" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="mellow">Mellow</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="og">OG</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full" size={'lg'} variant={'outline'}>
              Add To Cart
            </Button>
            <p>Made to order - 4 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
