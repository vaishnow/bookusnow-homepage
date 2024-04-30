import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiHeartStraightFill } from "react-icons/pi";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header className="p-5 pb-3 bg-white">
      <div className="flex justify-between mb-4">
        <h1 className="font-extrabold text-bun-red w-40">BookUsNow</h1>
        <div className="flex items-center relative w-3/5 space-x-2">
          <Button className="bg-black text-white">
            <GiHamburgerMenu className="me-2" />
            Categories
          </Button>
          <div className="w-full">
            <Input
              type="text"
              placeholder="DJI phantom"
              className="w-full border-bun-stroke"
            />
            <AiOutlineSearch className="absolute right-5 inset-y-0 my-auto text-bun-ash" />
          </div>
        </div>
        <div className="flex">
          <Button variant="link">
            <PiHeartStraightFill className="text-bun-ash me-2 size-4" /> Favourites
          </Button>
          <Button variant="outline" className="border-bun-stroke ">
            Sign in
          </Button>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
