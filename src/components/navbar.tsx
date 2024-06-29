import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-self-end">
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
    </nav>
  );
}
