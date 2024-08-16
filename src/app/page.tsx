import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase';

export default async function Home() {
  const supabase = createClient();
  const { data: products } = await supabase.from('products').select();

  console.log('products', products);

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
  return (
    <>
      {/* <div className="bg-gray-400 w-full h-screen flex items-center justify-center">
        VIDEO
      </div> */}
    </>
  );
}
