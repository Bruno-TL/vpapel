import Image from 'next/image';

export default function PRovaSocial() {
  return (
    <div className="grid gap-4 grid-cols-3">
      <div className="border rounded-lg border-indigo-600">
        <div className="flex items-center">
          <div className="border rounded-full ">
            <Image src="/issets/imageProvaSocial/image2.png" width={100} height={100} />
          </div>
          <div className="ml-5 ">
            <p>Luisa Araújo</p>
          </div>
        </div>
        <div className="bg-indigo-300 mx-3">
          <p>texto</p>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <div className="border rounded-full ">
            <Image src="/issets/imageProvaSocial/image11.png" width={100} height={100} />
          </div>
          <div>
            <p>nome</p>
          </div>
        </div>
        <div>
          <p>texto</p>
        </div>
      </div>

      <div>
        {' '}
        <div>
          <div>
            <Image />
          </div>
          <div>
            <p>nome</p>
          </div>
        </div>
        <div>
          <p>texto</p>
        </div>
      </div>
    </div>
  );
}
