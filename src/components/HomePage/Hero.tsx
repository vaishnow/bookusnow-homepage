import banner from "@/assets/banner.webp";

const Hero = () => {
  return (
    <section className="h-[90vh] md:h-screen bg-transparent flex w-full justify-center text-[#f3f3f3] text-center text-balance relative">
      <div className="mt-20 px-5 max-sm:leading-loose md:px-[8%] pb-40">
        <h1 className="text-[1.6rem] sm:text-[3rem] lg:text-[4rem] font-semibold mb-5">
          Discover Exciting Events Happening Near You – Stay Tuned for Updates!
        </h1>
        <p className="text-md font-light line-clamp-3 px-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus beatae
          aperiam facilis nihil reiciendis pariatur unde dolor
          temporibus, quo deserunt in nostrum non voluptates. Soluta deserunt
          beatae laboriosam sint?
        </p>
      </div>
      <img src={banner} alt="BookUsNow Banner" className="absolute -z-10 size-full inset-0 m-auto object-cover object-top" />
    </section>
  );
};
export default Hero;
