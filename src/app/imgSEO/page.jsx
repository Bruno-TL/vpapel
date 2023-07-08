import Image from 'next/image';

export default function Img() {
  return (
    <main>
      <div className="flex justify-center items-center">
        <Image
          src="/issets/imageHome/VPapellImgDown.png"
          width={400}
          height={150}
          alt="asdasdasd"
        />
      </div>
    </main>
  );
}
