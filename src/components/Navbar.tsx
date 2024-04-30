import { ChevronRightIcon } from "@radix-ui/react-icons";
import { TiLocation } from "react-icons/ti";

const Navbar = () => {
  const navLinks = [
    { name: "Live shows", url: "#" },
    { name: "Streams", url: "#" },
    { name: "Movies", url: "#" },
    { name: "Plays", url: "#" },
    { name: "Events", url: "#" },
    { name: "Sports", url: "#" },
    { name: "Activities", url: "#" },
  ];

  return (
    <nav className="flex w-full justify-center items-center relative">
      <button className="flex items-center absolute left-0 text-bun-ash ">
        <TiLocation className="size-5" />
        <span className="mx-3 text-sm text-black">Mumbai, India</span>
        <ChevronRightIcon />
      </button>
      <ul className="flex">
        {navLinks.map(({ name, url }) => (
          <li>
            <a className="p-3 mx-4" href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
