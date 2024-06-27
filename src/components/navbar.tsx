import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <ul className="flex space-x-5">
        <li>
          <Link href="#about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#work" className="hover:underline">
            Work
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            Blogs
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
}
