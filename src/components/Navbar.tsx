import { ChevronRightIcon } from "@radix-ui/react-icons";
import { TiLocation } from "react-icons/ti";
import styles from "@/styles/common/scroll.module.css"

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
    <nav className="flex max-md:flex-col w-full justify-center items-center relative">
      <button className="flex items-center lg:absolute self-start max-md:mb-3 left-0 text-bun-ash">
        <TiLocation className="size-5" />
        <span className="text-sm text-black whitespace-nowrap">Mumbai, India</span>
        <ChevronRightIcon />
      </button>
      <ul className={`flex w-full md:justify-center space-x-6 lg:space-x-10 overflow-y-hidden overflow-x-scroll ${styles.scrollHidden}`}>
        {navLinks.map(({ name, url }) => (
          <li key={name}>
            <a className="whitespace-nowrap" href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
