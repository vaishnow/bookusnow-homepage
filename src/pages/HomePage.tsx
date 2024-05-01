import Hero from "@/components/HomePage/Hero";
import Recommended from "@/components/HomePage/Recommended";
import Upcoming from "@/components/HomePage/Upcoming";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="ps-[5%]">
        <Recommended />
        <Upcoming />
      </div>
    </div>
  );
};
export default HomePage;
