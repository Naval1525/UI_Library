import Image from "next/image";

function Im() {
  return <div>
    <div className="fixed inset-0 w-full h-full z-1">
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
  </div>;
}
export default Im;
