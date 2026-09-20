import Image from "next/image";
import bannerImage from "@/assets/hero_img.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 mt-4 bg-amber-50 p-5 rounded-4xl">
      <div className="flex justify-center items-start flex-col">
        <h1 className=" text-2xl lg:text-5xl font-semibold leading-8 lg:leading-15 mb-4">
          Books to freshen up <br /> your bookshelf
        </h1>

        <Link href="/listedBook" className="btn btn-success text-white">
          View The List
        </Link>
      </div>
      <div>
        <Link href="bannerAdd">
          <Image
            className="rounded-2xl hover:scale-102 transition duration-300"
            src={bannerImage}
            alt="Banner Image"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
