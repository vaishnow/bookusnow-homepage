import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiHeartStraightFill } from "react-icons/pi";
import Navbar from "@/components/Navbar";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="p-5 pb-3 bg-white">
      <div className="flex justify-between items-center md:mb-4">
        <h1 className="font-extrabold text-bun-red w-40 text-lg">BookUsNow</h1>
        <div className="hidden md:flex items-center relative w-3/5 space-x-2">
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
          <Button variant="link" className="md:hidden">
            <AiOutlineSearch className="size-4 text-bun-ash" />
          </Button>
          <Button variant="link">
            <PiHeartStraightFill className="text-bun-ash size-4" />
            <span className="max-md:hidden ms-2">Favourites</span>
          </Button>
          <Button
            variant="link"
            className="border md:border-bun-stroke max-md:border-0"
          >
            <FaUser className="md:hidden text-bun-ash " />
            <span className="max-md:hidden">Sign in</span>
          </Button>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
