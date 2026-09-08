import ShadowImages from "../assets/bg-shadow.png";
import BannerImg from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-black text-white p-10 rounded-3xl flex justify-center items-center flex-col gap-3 my-10 "
      style={{ backgroundImage: `url(${ShadowImages})` }}
    >
      <img src={BannerImg} alt="Banner Image" />
      <h1 className="sm:text-2xl md:text-4xl text-center">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p>Beyond Boundaries Beyond Limits</p>
      <div className="p-2 border-2 border-[#E7FE2A] rounded-2xl">
        <button className="btn bg-[#E7FE2A] font-bold tracking-widest rounded-2xl">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
