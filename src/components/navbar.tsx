import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center mb-5">
      <ul className="flex space-x-5">
        <li>
          <Link href="/" className="hover:underline">
            home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">
            blog
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </nav>
  );
}
